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
          Allofresh is eGrocery/Quick Commerce startup from Bukalapak and Trans Retail Indonesia.
          <ul className="list-inside list-disc">
            <li>
              Automated the release process for Android and iOS apps, minimizing manual intervention and potential errors.
            </li>
            <li>
              Developed, managed, and enhanced automation processes for building, testing, and distributing builds to testers.
            </li>
            <li>
              Migrated Android and iOS native add to Flutter single code base. 
            </li>
            <li>
              Integrated Real User Monitoring and Performance Tracking with Datadog. 
            </li>
            <li>
              Integrated device fingerprinting system to help with fraud detection.
            </li>
            <li>
              Improve crashrates-free from 95% to 99%, reduce apk size by ~10MB, improve startup time and reduce frozen frame at the early stage of Allofresh.
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
          Bukalapak was one of the largest eCommerce in Indonesia.
          <ul className="list-inside list-disc">
            <li>
              As part of Discovery squad, i have developed &quot;BukaBike&quot; (a rental bike service) features for Android and iOS
            </li>
            <li>
              As part of Society squad, i have developed E-Samsat, Pajak PBB, Penerimaan Negara, Buka Ramadhan features for iOS
            </li>
            <li>
              As part of Core Developer Xperience, i have developed CI/CD system for bukalapak iOS apps and maintained internal toolings.
            </li>
            <li>
              As part of Saas, I have developed feature for Mitra Bukalapak Android App And BukuMitra app.
            </li>
            <li>
              Assigned to work on &quot;Project Beta&quot; Android and iOS app that eventually become Allofresh
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
          MuslimApp.id is a companion app for Muslim in Indonesia.
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
          Qlue is a smart city provider company in Indonesia that was the official app for Jakarta from 2014 to 2020.
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
          DyCode is an award-winning application development enabler based in Bandung, Indonesia.
          <ul className="list-inside list-disc">
            <li>Developed boilerplate and establish engineering standard for Android team.</li>
            <li>Developed new Android application and mantain legacy application.</li>
            <li>Developed 2 Android application related with Internet of Things.</li> 
            <li>Mentored junior and intern Android Developers.</li> 
            <li>Gave several talks and workshop about Android Development.</li>
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
    "Continuous Integration (CI)",
    "Ruby",
    "PHP",
  ],
  projects: []
} as const;
