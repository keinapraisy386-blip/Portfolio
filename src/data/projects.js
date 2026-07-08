import Healthcore from "../assets/Projects/Healthcore.png"
import Quiz from "../assets/Projects/Quiz.png"
import Autoencoder from "../assets/Projects/Autoencoder.png"
import Multithreading from "../assets/Projects/Multithreading.png"
import Stepdiscount from "../assets/Projects/Stepdiscount.png"
import Pixel from "../assets/Projects/Pixel.png"
import FAC from "../assets/Projects/FAC.png"
import Simon_Game from "../assets/Projects/Simon_Game.png"
import Todo_App from "../assets/Projects/Todo_App.png"
import ECF from "../assets/Projects/ECF.png"
import CLI_TMA from "../assets/Projects/CLI_TMA.png"




const projects = [
    {
        img: Healthcore,
        name: "HealthCore",
        demo: "https://keinapraisy386-blip.github.io/Project-Expo/",
        code: "https://github.com/keinapraisy386-blip/HealthCore",
        description: "Built an interactive, multiuser Hospital Management System.",
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Quiz,
        name: "QuizArena",
        demo: "https://keinapraisy.github.io/Quiz_System/",
        code: "https://github.com/KeinaPraisy/Quiz_System",
        description: "Built an interactive Quiz System which lets users create and answer quizes.",
        style: {
            shadow: "shadow-[#5E4746]",
            cover: "from-[#5E4746]",
            display: " hidden group-hover:flex"
        }
    },
    // {
    //     img: Dev_News,
    //     name: "Dev News",
    //     demo: "https://dev-news-793.vercel.app/",
    //     code: "https://github.com/dhawal-793/Dev_News",
    //     description: "Dev News is a news website, where you can find the latest news anytime, anywhere",
    //     style: {
    //         shadow: "shadow-[#FB923C]",
    //         cover: "from-[#FB923C]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    {
        img: Autoencoder,
        name: "Autoencoder-Based Image Denoising System",
        demo: "https://github.com/KeinaPraisy/Autoencoder/blob/main/AIML.py",
        code: "https://github.com/KeinaPraisy/Autoencoder",
        description: "Built a project implementing an autoencoder neural network for image denoising using the CIFAR-10 dataset.",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#F8FAFC]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Multithreading,
        name: "Multithreading Task Manager",
        demo: "https://keinapraisy.github.io/Multithreading-Task-Manager/",
        code: "https://github.com/KeinaPraisy/Multithreading-Task-Manager",
        description: "Built a project which simulates 5 real-world tasks running as concurrent threads.",
        style: {
            shadow: "shadow-[#23CEEE]",
            cover: "from-[#23CEEE]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Stepdiscount,
        name: "Discount Castle Quest",
        demo: "https://keinapraisy386-blip.github.io/STEP_DISCOUNT/",
        code: "https://github.com/keinapraisy386-blip/STEP_DISCOUNT",
        description: "Developed a fun, interactive project which calculates discount based on the step count.",
        style: {
            shadow: "shadow-[#277AF8]",
            cover: "from-[#277AF8]",
            display: " hidden group-hover:flex"
        }
    },
    //{
        // img: FAC,
        // name: "FontAwesome Clone",
        // demo: "https://dhawal-793.github.io/Font-Awesome-Clone/",
        // code: "https://github.com/dhawal-793/Font-Awesome-Clone",
        // description: "FontAwesome Clone is a Project based on Fontawesome.com, created using React Js and Tailwind CSS.",
        // style: {
        //     shadow: "shadow-[#FFD43B]",
        //     cover: "from-[#FFD43B]",
        //     display: " hidden group-hover:flex"
        // }
    //},
    {
        img: Pixel,
        name: "Pixel Canvas",
        demo: "https://keinapraisy386-blip.github.io/PIXEL_ART/",
        code: "https://github.com/keinapraisy386-blip/PIXEL_ART",
        description: "Experimenting with pixel art interactions.",
        style: {
            shadow: "shadow-[#011F3F]",
            cover: "from-[#011F3F]",
            display: " hidden group-hover:flex"
        }
    },
    // {
    //     img: Todo_App,
    //     name: "TODO APP",
    //     demo: "https://meen-to-do-app.onrender.com/",
    //     code: "https://github.com/dhawal-793/MEEN-TODO-APP",
    //     description: "MEEN ToDO App is a very simple Todo App created using MongoDb,Express Js EJs and Node Js.",
    //     style: {
    //         shadow: "shadow-[#A582E2]",
    //         cover: "from-[#A582E2]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    // {
    //     img: ECF,
    //     name: "Ecommerce Frontend",
    //     demo: "https://dhawal-793.github.io/E-Commerce-Website-Front-End-Design/",
    //     code: "https://github.com/dhawal-793/E-Commerce-Website-Front-End-Design",
    //     description: "Frontend Design of an Ecommerce Website created using HTML CSS JS and Bootstrap.",
    //     style: {
    //         shadow: "shadow-[#CEC3FB]",
    //         cover: "from-[#CEC3FB]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    // {
    //     img: CLI_TMA,
    //     name: "Task Manager CLI",
    //     demo: "https://github.com/dhawal-793/Command-line-application-for-Task-Management",
    //     code: "https://github.com/dhawal-793/Command-line-application-for-Task-Management",
    //     description: "This is a Task Management CLI App created using C++, here user can create, read, Update and delete tasks.",
    //     style: {
    //         shadow: "shadow-[#763145]",
    //         cover: "from-[#763145]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    // {
    //     img: "",
    //     name: "WordCloud Generator",
    //     demo: "https://github.com/dhawal-793/Wordcloud-maker",
    //     code: "https://github.com/dhawal-793/Wordcloud-maker",
    //     description: "This is a WordCloud Maker, Created using Python. User can create WordCloud by giving paragraph of text as Input.   ",
    //     style: {
    //         shadow: "shadow-emerald-500",
    //         cover: "from-emerald-500",
    // display:" hidden group-hover:flex"
    //     }
    // },
]
export default projects;