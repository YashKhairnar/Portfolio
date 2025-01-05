
export default function Work(){
    return (
        <div id="work" className="p-20">
            <div className="font-Poppins flex flex-col items-center">
                <p className="text-gray-300 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins font-bold">What have I done so far</p>
                <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience.</h1>
            </div>
            <div className="flex flex-col">

            //first company  
            <div className="flex justify-center gap-5 font-poppins text-white  mt-5 mr-20">
            <span className="p-5 font-gray-600 text-xl font-bold">July 2024 - Present</span>
            <div className="flex flex-col">
                <div className="rounded-full border-white " />
                <div className="w-1 bg-white h-full"/>
            </div>
            <div className="w-3/5 p-5 ml-5  bg-violet-950 border-b-4 rounded-md border-white">
                <h6 className="font-bold text-xl">Software Engineer</h6>
                <span className="text-gray-400">Accurate Industrial Controls Pvt. Ltd.</span>
                <ul className='list-disc mt-5 ml-5'>
                    <li>Developed a pre-filling pipeline in ROS for Indian Oil Corporation that processes camera feeds through NVIDIA Triton
                    Server, utilizing YOLO for O-ring and pin detection and EasyOCR for weight and expiry date extraction of LPG cylinders.</li>
                    <li>Achieved 93% model accuracy while reducing manual intervention by 100%, significantly enhancing operational efficiency.</li>
                    Implemented collision avoidance algorithm, LIDAR sensor and vision camera model integration for autonomous boat, a
                    project for Indian Ministry of Defence
                    <li>Programmed a pipeline to monitor Generator Set, using a Random Forest Regressor to estimate remaining shelf life based on
                    36 engine, generator, and mains parameters, achieving 85% accuracy.</li>
                    <li>Developed a Windows application for object detection: Created a Python application using the YOLOv11n model to detect
                    water vessels. Implemented WebSockets for remote camera control.</li>
                    <li>Created a Visual SLAM for an autonomous agribot operating in a farm environment. Utilized segmentation models to
                    distinguish between high and low areas in row farming.</li>
                </ul>
            </div>
        </div>

        //second company
            <div className="flex justify-center gap-5 font-poppins text-white  mt-5 mr-20">
            <div className="w-3/5 p-5 mr-5  bg-violet-950 border-b-4 rounded-md border-white">
                <h6 className="font-bold text-xl">Artificial Intelligence Intern</h6>
                <span className="text-gray-400">Accurate Industrial Controls Pvt. Ltd.</span>
                <ul className='list-disc mt-5 ml-5'>
                    <li>Conducted anomaly detection in copper coils and gas cylinders for BHEL, utilizing computer 
                        vision algorithms such as Patchcore, YOLO, and object tracking, along with image compression 
                        algorithms</li>
                    <li>Implemented video streaming capabilities using Flask, React, NodeJS, and Express</li>
                    <li>Explored ROS operating system, pathfinding algorithms, Linux, and Gazebo, while also modeling
                        and training LSTM for predicting the time until failure of aircraft engines. Additionally, 
                        prioritized the development of scalable systems integrating machine learning models</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <div className="rounded-full border-white " />
                <div className="w-1 bg-white h-full"/>
            </div>
            <span className="p-5 font-gray-600 text-xl font-bold">August 2023 - November 2023</span>
        </div>

        //third company
        <div className="flex justify-center gap-5 font-poppins text-white  mt-5 mr-20">
            <span className="p-5 font-gray-600 text-xl font-bold">November 2022 - February 2023</span>
            <div className="flex flex-col">
                <div className="rounded-full border-white " />
                <div className="w-1 bg-white h-full"/>
            </div>
            <div className="w-3/5 p-5 ml-5  bg-violet-950 border-b-4 rounded-md border-white">
                <h6 className="font-bold text-xl">Deep Learning Intern</h6>
                <span className="text-gray-400">ResoluteAI Software</span>
                <ul className='list-disc mt-5 ml-5'>
                    <li>Modelled proof-of-concepts (POCs) involving Computer Vision, NLP, Anomaly Detection, 
                        and ML technologies in Python, deploying the resultant models.</li>
                    <li>Explored various architectures including CNN, YOLO, LSTM, RNN, and ResNet, 
                        alongside statistical and deep learning algorithms</li>
                    <li>Conducted data analysis on client data to extract valuable insights and 
                        constructed a resume parser using NLTK, followed by comprehensive application
                        testing</li>
                </ul>
            </div>
        </div>
        


            </div>
        </div>
    )
}