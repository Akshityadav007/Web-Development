import { useEffect, useState } from "react";

export function Question4() {
    const [wordCount, setWordCount] = useState(0);
    const [generatedPara, setGeneratedPara] = useState(""); // State to hold the generated paragraph

    const handleGenerate = () => {
        setGeneratedPara(<CustomPara words={wordCount} />);
    };

    return (
        <div>
            <div>Para Generator</div>
            <input
                onChange={(e) => setWordCount(parseInt(e.target.value) || 0)} // Parse input as number
                type="number"
                placeholder="Enter Number of Words"
            />
            <button onClick={handleGenerate}>Generate</button>
            <div>{generatedPara}</div> {/* Display generated paragraph */}
        </div>
    );
}

function CustomPara({ words }) {
    const para = "Education is a cornerstone of human development and a vital component of society's progress, serving as a pathway for individuals to acquire knowledge, skills, and critical thinking abilities necessary for navigating the complexities of the modern world. Throughout history, education has evolved from informal, community-based learning to structured, formal systems designed to equip individuals for specific roles within society. In ancient civilizations, such as those in Mesopotamia and Egypt, education was primarily reserved for the elite, focusing on literacy, mathematics, and religious teachings, while the masses remained largely uneducated. However, as societies advanced, the importance of education for all became increasingly recognized. The Enlightenment period in Europe marked a significant shift, emphasizing reason, scientific inquiry, and the value of education in fostering democratic ideals. This era laid the groundwork for public education systems, which emerged in the 19th century as a response to industrialization and the need for an educated workforce. The establishment of compulsory education laws aimed to ensure that every child had access to basic education, regardless of their background. Today, education is recognized as a fundamental human right, essential for promoting equality and social justice. Access to quality education empowers individuals to break the cycle of poverty, improve their economic prospects, and contribute to their communities. However, significant disparities in educational access and quality persist, particularly in low-income and marginalized communities. The COVID-19 pandemic has further exacerbated these inequalities, as remote learning highlighted the digital divide, leaving many students without access to the necessary technology and resources for effective learning. As we move forward, it is crucial to address these disparities by investing in equitable educational opportunities, ensuring that all students have the tools they need to succeed. Furthermore, education should not be viewed solely as a means to an economic end; it is also a vital component of personal development and social cohesion. Education fosters critical thinking, creativity, and emotional intelligence, equipping individuals with the skills necessary to navigate an increasingly complex world. It encourages civic engagement, allowing individuals to participate meaningfully in democratic processes and advocate for their rights and the rights of others. Additionally, education promotes cultural understanding and appreciation, fostering empathy and tolerance in an increasingly interconnected global society. As we look to the future, it is essential to embrace innovative teaching methodologies and technologies that enhance learning experiences. The integration of digital tools and resources in the classroom can facilitate personalized learning, allowing students to progress at their own pace and engage with the material in ways that resonate with them. Moreover, a focus on social-emotional learning is vital for addressing the mental health challenges faced by students today, providing them with the skills to manage stress, build resilience, and cultivate healthy relationships. Ultimately, the future of education lies in our ability to adapt and evolve, ensuring that it remains relevant and accessible to all. By fostering a culture of lifelong learning and embracing the diverse needs of learners, we can create an inclusive educational landscape that empowers individuals to realize their full potential and contribute positively to society.";

    const wordsArray = para.split(" "); // Split the paragraph into an array of words
    const res = wordsArray.slice(0, words).join(" "); // Get the requested number of words

    return <div>{res}</div>; // Return the resulting string
}
