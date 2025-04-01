import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fahmi Sidik",
  initials: "FS",
  location: "Bandung, Indonesia",
  locationLink: "https://www.google.com/maps/place/Bandung",
  about:
    "Senior Mobile App Engineer (Android, iOS, Flutter, CI)",
  summary: (
    <>
      Mobile-Focused Software Engineer with combined 10 years of experience in Android, iOS, Flutter, and CI/CD. I have worked on feature development, performance optimization, native to Flutter migration, automation, and developer toolings.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/10940190?s=400&u=64654a4de3f4248853a02b94a1900fff9392bf55&v=4",
  contact: {
    email: "fahmisdk6@gmail.com",
    tel: "+6281931391287",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fahmisdk6",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fahmi-sidik/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Vocational High School 1, Cimahi",
      degree: "Software Engineering Major",
      start: "2011",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Allofresh",
      link: "https://allofresh.id/",
      badges: ["Android", "iOS", "Flutter", "CICD", "Kotlin", "Swift", "Dart", "Ruby", "Fastlane"],
      title: "Software Development Engineer -> Senior Software Development Engineer",
      start: "2022",
      end: null,
      description: (
        <>
           Online grocery platform formed through a joint venture between Bukalapak, Trans Retail Indonesia, and Growtheum Capital Partners. Launched in 2022 with an initial funding of $70 million.
          <ul className="list-inside list-disc">
            <li>
              Launched the first version for Android and iOS using native technology, maintaining a crash rate of ~99%, optimizing application size, app startup time, and rendering performance. 
            </li>
            <li>
              Migrated Android and iOS native apps to a Flutter app in a single code base while adding features to the native apps. Reduced the manpower required for each feature and sped up the development timeline.
            </li>
            <li>
              Developed critical features such as payment integration and background sync cart system, improving user checkout experience and reducing drop-off rates.
            </li>
            <li>
              Improved the development process by developing, managing, and enhancing automation processes for building, testing, and distributing builds to testers. Reducing manual processes, preventing bugs, and improving general productivity. 
            </li>
            <li>
              Integrated and enhanced monitoring tools to track metrics such as sessions, user actions, resource usage, errors, and performance traces. These tools help developers debug production issues, monitor system health, and improve overall performance.
            </li>
            <li>
              Improved the release process by automating processes such as code freeze,  updating the release note, uploading to TestFlight/internal tester, and promoting to App Store/Google Play Store. Reducing 90% of manual processes and preventing common errors.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Bukalapak",
      link: "https://bukalapak.com",
      badges: ["Android", "iOS", "CICD", "Kotlin", "Swift"],
      title: "Mobile App Engineer",
      start: "2018",
      end: "2022",
      description: (
        <>
          Leading Indonesian e-commerce platform serving over 100 million users and 7 million partners. Notable for its 2021 IPO, which raised approximately $1.5 billion, marking Indonesia&apos;s largest at the time.
          <ul className="list-inside list-disc">
            <li>
              Developed BukaBike, an IoT-powered bike rental service, for Android and iOS.
            </li>
            <li>
              Built tax payment features (E-Samsat, Pajak PBB, Penerimaan Negara) for iOS, simplifying government tax payments for millions of users.
            </li>
            <li>
              Improved the development process by developing, managing, and enhancing automation processes for building, testing, and distributing builds to testers. Reducing manual processes, preventing bugs, and improving general productivity. 
            </li>
            <li>
              Reducing test pipeline duration by 66% by detecting the changes in the MR and only testing the changed module and its affected modules. 
            </li>
            <li>
              Assigned to work on &quot;Project Beta&quot; Android and iOS app that eventually became Allofresh.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Muslimapp.id",
      link: "https://muslimapp.id/",
      badges: ["Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      start: "2018",
      end: "2018",
      description: (
        <>
          Islamic lifestyle application designed to support the daily worship and spiritual needs of Muslims in Indonesia.
          <ul className="list-inside list-disc">
            <li>
              Developed MuslimApp.id android app and continue improving its feature and stability after release.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Qlue",
      link: "https://qlue.co.id/",
      badges: ["Freelance", "Android", "Java"],
      title: "Android Developer",
      start: "2016",
      end: "2017",
      description: (
        <>
          A smart city provider company in Indonesia that was the official app for Jakarta from 2014 to 2020.
          <ul className="list-inside list-disc">
            <li>Developed new featured for Qlue android application, revamped existing feature and redesign its UI.</li>
          </ul>
        </>
      ),
    },
    {
      company: "DyCode",
      link: "http://www.dycode.co.id/",
      badges: ["Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      start: "2014",
      end: "2017",
      description: (
        <>
          Award-winning application development consultant based in Bandung, Indonesia.
          <ul className="list-inside list-disc">
            <li>Developed multiple Android applications, including two IoT-driven projects, expanding DyCode&apos;s portfolio in smart technology solutions.</li>
            <li>Standardized engineering best practices, creating reusable boilerplate code that increased development speed and project maintainability.</li>
            <li>Mentored and trained junior engineers, fostering a strong Android development team.</li>
            <li>Led technical workshops on Android development, sharing expertise with local developer communities.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "Android Development",
    "Java",
    "Kotlin",
    "XML",
    "iOS Development",
    "Swift",
    "Git",
    "Continuous Integration/Continuous Delivery (CI/CD)",
    "Gitlab CI/CD",
    "Fastlane",
    "Jenkins",
    "Clean Architecture",
    "Unit Testing",
    "Instrumentation Testing",
    "Ruby",
    "PHP",
  ],
  projects: [
    {
      title: "Allofresh",
      description: "Allofresh is eGrocery/Quick Commerce App with millions of downloads and 4.9 rating in Play Store.",
      techStack: ["Android", "iOS", "Flutter", "CICD", "Kotlin", "Swift", "Dart", "Ruby", "Fastlane"],
      link: {
        label: "Allofresh",
        href: "https://allofresh.id/",
      },
    },
    {
      title: "Bukalapak",
      description: "Bukalapak is one of the largest e-commerce platforms in Indonesia with 50+ millions downloads and 4.5 rating in Play Store.",
      techStack: ["Android", "Java", "Kotlin", "Swift", "iOS"],
      link: {
        label: "Bukalapak",
        href: "https://www.bukalapak.com/",
      },
    },
    {
      title: "Mitra Bukalapak",
      description: "Mitra Bukalapak is a platform for Bukalapak&apos;s partners to enrich their business with Bukalapak&apos;s ecosystem with 10+ millions downloads and 4.5 rating in Play Store.",
      techStack: ["Android", "Java", "Kotlin", "Swift", "iOS"],
      link: {
        label: "Mitra Bukalapak",
        href: "https://mitra.bukalapak.com/",
      },
    },
    {
      title: "MuslimApp.id",
      description: "MuslimApp.id is a companion app for Muslim in Indonesia.",
      techStack: ["Android", "Java", "Kotlin"],
      link: {
        label: "MuslimApp.id",
        href: "https://muslimapp.id/",
      },
    },
    {
      title: "Qlue",
      description: "Qlue is an official smart city app for Jakarta from 2014 to 2020.",
      techStack: ["Android", "Java", "Kotlin"],
      link: {
        label: "Qlue",
        href: "https://qlue.co.id/",
      },
    },
    
  ]
} as const;
