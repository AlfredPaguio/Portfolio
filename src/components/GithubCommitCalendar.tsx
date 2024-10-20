'use client'
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from 'next-themes'
import { REPO_OWNER } from '@/data/Repositories'

export function GithubCommitCalendar() {
  const { theme } = useTheme()

  const colorScheme = theme === 'dark' ? 'dark' : 'light'

  return (
    <div className="my-10 w-full mx-10">
      <h3 className="text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        A cool chart
      </h3>
      <div className="mt-5 flex items-center justify-center">
        <GitHubCalendar
          colorScheme={colorScheme}
          username={REPO_OWNER}
          showWeekdayLabels={true}
        />
      </div>
    </div>
  )
}