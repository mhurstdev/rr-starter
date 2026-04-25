import { expect, test } from '@playwright/test';
import _storybookIndex from '../../build-storybook/index.json' with { type: 'json' };
import type { StoryIndex } from 'storybook/internal/types';

const storybookIndex = _storybookIndex as StoryIndex;

const stories = Object.values(storybookIndex.entries).filter(
	(entry) => entry.type === 'story',
);

for (const story of stories) {
	test(`${story.title} — ${story.name}`, async ({ page }, workerInfo) => {
		const params = new URLSearchParams({ id: story.id, viewMode: 'story' });

		await page.goto(`/iframe.html?${params.toString()}`);
		await page.waitForSelector('#storybook-root');
		await page.waitForLoadState('networkidle');

		await expect(page).toHaveScreenshot(
			`${story.id}-${workerInfo.project.name}-${process.platform}.png`,
			{ fullPage: true, animations: 'disabled' },
		);
	});
}
