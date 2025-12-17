export interface Event {
    slug: string
    date: string
    category: string
    title: string
    description: string
    fullDescription: string
    images: string[]
    location?: string
    time?: string
}

export const pastEvents: Event[] = [
    {
        slug: "japanese-cultural-immersion-workshop",
        date: "2024-11-15",
        category: "CULTURAL",
        title: "Japanese Cultural Immersion Workshop",
        description:
            "Experience traditional Japanese arts including calligraphy, tea ceremony, ikebana (flower arrangement), and more.",
        fullDescription: `The Japanese Cultural Immersion Workshop was a day-long celebration of traditional Japanese arts and culture. Participants had the opportunity to:

• Master the art of Japanese calligraphy (Shodo) under expert guidance
• Experience an authentic tea ceremony (Sadō) and learn about its philosophy
• Create beautiful flower arrangements through Ikebana
• Try on traditional Japanese attire and learn about its significance
• Taste authentic Japanese cuisine and sweets

The workshop attracted over 100 participants from various departments, fostering cross-cultural understanding and appreciation for Japanese traditions.`,
        images: ["/images/events/event1.jpg", "/images/events/event2.jpg", "/images/events/event3.jpg"],
        location: "Woxsen University - Cultural Center",
        time: "10:00 AM - 5:00 PM",
    },
    {
        slug: "tanabata-festival-celebration",
        date: "2024-10-10",
        category: "ACADEMICS",
        title: "Tanabata Festival Celebration",
        description:
            "Join our celebration of Tanabata, the Star Festival with traditional activities and cultural performances.",
        fullDescription: `Tanabata, also known as the Star Festival, is one of Japan's most beloved summer celebrations. Our campus came alive with:

• Traditional Tanzaku (wish papers) writing and decoration
• Live performances of Japanese folk music and dance
• Storytelling sessions about the legend of Orihime and Hikoboshi
• Japanese food stalls featuring yakisoba, takoyaki, and more
• Yukata dress-up photo opportunities

Students and faculty gathered under beautifully decorated bamboo trees, writing their wishes and celebrating this romantic legend together.`,
        images: ["/images/events/event4.jpg", "/images/events/event5.jpeg", "/images/events/event6.jpg"],
        location: "Woxsen University - Main Lawn",
        time: "4:00 PM - 9:00 PM",
    },
    {
        slug: "jlpt-preparation-bootcamp",
        date: "2024-09-05",
        category: "LANGUAGE",
        title: "JLPT Preparation Bootcamp",
        description:
            "Intensive preparation course for the Japanese Language Proficiency Test across all levels.",
        fullDescription: `The JLPT Preparation Bootcamp was an intensive three-day program designed to help students prepare for the Japanese Language Proficiency Test. The program included:

• Comprehensive review of vocabulary and kanji for N5-N2 levels
• Grammar workshops with native Japanese speakers
• Listening comprehension practice sessions
• Mock tests simulating actual JLPT conditions
• Tips and strategies for exam success
• One-on-one consultation sessions

Over 50 students participated, with many reporting significant improvement in their practice test scores.`,
        images: ["/images/events/event7.jpg", "/images/events/event8.jpeg"],
        location: "Woxsen University - Language Lab",
        time: "9:00 AM - 4:00 PM (3 days)",
    },
    {
        slug: "japan-india-business-innovation-forum",
        date: "2024-08-20",
        category: "INNOVATION",
        title: "Japan-India Business Innovation Forum",
        description:
            "Exploring collaborative opportunities between Japanese and Indian businesses.",
        fullDescription: `The Japan-India Business Innovation Forum brought together industry leaders, academics, and students to explore the future of Indo-Japanese business relations. Highlights included:

• Keynote speeches from leading Japanese and Indian entrepreneurs
• Panel discussions on technology transfer and innovation
• Networking sessions with representatives from Japanese companies
• Student pitch competition for Japan-focused business ideas
• Exhibition showcasing Japanese technology and products

The forum strengthened ties between our university and Japanese industry partners, opening new doors for internships and collaborations.`,
        images: ["/images/events/event9.jpeg", "/images/events/event10.png"],
        location: "Woxsen University - Business School Auditorium",
        time: "10:00 AM - 6:00 PM",
    },
]

export function getEventBySlug(slug: string): Event | undefined {
    return pastEvents.find((event) => event.slug === slug)
}
