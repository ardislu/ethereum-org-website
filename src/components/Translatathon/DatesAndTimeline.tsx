import { ButtonLink } from "@/components/ui/buttons/Button"
import { Flex } from "@/components/ui/flex"

import { CROWDIN_PROJECT_URL } from "@/lib/constants"

import {
  APPLICATION_END_DATE,
  APPLICATION_START_DATE,
  APPLICATION_URL,
} from "./constants"

export const dates = [
  {
    title: "Applications open",
    description:
      "Fill out the application form to participate and compete for prizes",
    startDate: new Date(APPLICATION_START_DATE),
    endDate: new Date(APPLICATION_END_DATE),
    link: APPLICATION_URL,
    linkText: "Apply",
  },
  {
    title: "Workshops",
    description:
      "Join our Discord to participate in onboarding calls and workshops and learn all about the Translatathon",
    startDate: new Date("2024-08-05T12:00:00Z"),
    endDate: new Date("2024-08-08T12:00:00Z"),
    link: "/discord/",
    linkText: "Prepare",
  },
  {
    title: "Translatathon",
    description:
      "The translation period - translate as much or as little as you want",
    startDate: new Date("2024-08-09T12:00:00Z"),
    endDate: new Date("2024-08-18T12:00:00Z"),
    link: CROWDIN_PROJECT_URL,
    linkText: "Translate",
  },
  {
    title: "Evaluation period",
    description:
      "Each translation will be evaluated by professional reviewers to verify translations were not done with AI tools and meet the minimum quality threshold",
    startDate: new Date("2024-08-19T12:00:00Z"),
    endDate: new Date("2024-08-28T12:00:00Z"),
    link: null,
    linkText: null,
  },
  {
    title: "Results announcement",
    description:
      "We will announce the results and winners on the ethereum.org community Call",
    startDate: new Date("2024-08-29T12:00:00Z"),
    endDate: null,
    link: null,
    linkText: null,
  },
]

export const DatesAndTimeline = () => {
  const todaysDate = new Date()

  return (
    <Flex className="mb-16 flex flex-col p-4">
      {dates.map((date, index) => {
        const isLive =
          todaysDate >= date.startDate &&
          (date.endDate ? todaysDate <= date.endDate : true)
        return (
          <Flex
            key={index}
            className={`flex border-l ${index === dates.length - 1 ? "border-transparent" : "border-purple-600 dark:border-purple-400"} px-4 ${index === dates.length - 1 ? "pb-0" : "pb-16"} gap-4`}
          >
            <Flex>
              <div
                className={`-ml-8 h-8 w-8 rounded-full ${
                  isLive
                    ? "bg-purple-600 dark:bg-purple-400"
                    : "bg-purple-100 dark:bg-purple-900"
                }`}
              />
            </Flex>
            <Flex className="flex flex-col gap-6">
              <Flex
                className={`flex h-8 items-center rounded-full px-4 ${
                  isLive
                    ? "dark:text-ButtonLinkack bg-purple-600 text-white dark:bg-purple-400"
                    : "bg-purple-100 text-gray-800 dark:bg-purple-900 dark:text-gray-100"
                }`}
              >
                <p>
                  {date.startDate.toDateString()}{" "}
                  {date.endDate ? `- ${date.endDate.toDateString()}` : ""}
                </p>
              </Flex>
              <Flex className="flex flex-col">
                <h3 className="text-2xl">{date.title}</h3>
                <p>{date.description}</p>
              </Flex>
              {date.link && (
                <Flex>
                  <ButtonLink
                    href={date.link}
                    className={`mt-2 ${date.link === APPLICATION_URL && !isLive ? "pointer-events-none text-disabled" : ""}`}
                    variant="outline"
                    aria-disabled={date.link === APPLICATION_URL && !isLive}
                  >
                    {date.linkText}
                  </ButtonLink>
                </Flex>
              )}
            </Flex>
          </Flex>
        )
      })}
    </Flex>
  )
}
