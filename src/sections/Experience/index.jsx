import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import FormattedDate from "../../components/FormattedDate";


const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    return (
        <div className="">
            <div className="text-primaryAccent font-medium">Experience</div>
            <div 
                className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter['exp1'] ? "bg-primaryBase" : ""}`}
                onMouseEnter={()=> setIsMouseEnter({'exp1':true})}
                onMouseLeave={()=> setIsMouseEnter({'exp1':false})}
            >
                <div>
                    <FormattedDate isHighLight={isMouseEnter['exp1']}>2022-2023</FormattedDate>
                    <div>
                        <img 
                        className="w-5/6 rounded-md"
                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/web_developerskills.jpg" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter['exp1'] ? "text-primaryTitle" : ""}`}>
                        Fashion Ecomerce
                        <FontAwesomeIcon className={`text-xs -rotate-45 transition-all duration-1000 ease-out ${isMouseEnter['exp1'] ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight}/>
                    </div>
                    <div className="flex gap-4 text-xl">
                        <a href="#" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faMedium} /></a>
                        <a href="#" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div className="text-sm">A simple and minimalist portfolio for developers built with React and tailwindCSS, designed to be cleon and fash.</div>
                    <div>
                        <div className="flex gap-4 text-sm">
                            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ? "text-primaryTitle" : ""}`}>React</div>
                            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ? "text-primaryTitle" : ""}`}>Tailwind</div>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter['exp2'] ? "bg-primaryBase" : ""}`}
                onMouseEnter={()=> setIsMouseEnter({'exp2':true})}
                onMouseLeave={()=> setIsMouseEnter({'exp2':false})}
            >
                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnter['exp2'] ? "text-primaryAccent" : ""}`}>2022-2023</span>
                    </div>
                    <div>
                        <img 
                        className="w-5/6 rounded-md"
                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/web_developerskills.jpg" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter['exp2'] ? "text-primaryTitle" : ""}`}>
                        Fashion Ecomerce
                        <FontAwesomeIcon className={`text-xs -rotate-45 transition-all duration-1000 ease-out ${isMouseEnter['exp2'] ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight}/>
                    </div>
                    <div className="flex gap-4 text-xl">
                        <a href="#" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faMedium} /></a>
                        <a href="#" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div className="text-sm">A simple and minimalist portfolio for developers built with React and tailwindCSS, designed to be cleon and fash.</div>
                    <div>
                        <div className="flex gap-4 text-sm">
                            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ? "text-primaryTitle" : ""}`}>React</div>
                            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter ? "text-primaryTitle" : ""}`}>Tailwind</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;