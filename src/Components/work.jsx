
export default function Work() {
    return (
        <div id="work" className="p-20">
            <div className="font-Poppins flex flex-col items-center">
                <p className="text-gray-300 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-poppins font-bold">What have I done so far</p>
                <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience.</h1>
            </div>
            <div className="flex flex-col">

            //first company
                <div className="flex justify-center gap-5 font-poppins text-white  mt-5 mr-20">
                    <span className="p-5 font-gray-600 text-xl font-bold">July 2024 - June 2025</span>
                    <div className="flex flex-col">
                        <div className="rounded-full border-white " />
                        <div className="w-0.5 bg-white h-full" />
                    </div>
                    <div className="w-3/5 p-5 ml-5  bg-violet-950 border-b-4 rounded-md border-white">
                        <h6 className="font-bold text-xl">Software Engineer</h6>
                        <span className="text-gray-400">Accurate Industrial Controls Pvt. Ltd.</span>
                        <ul>
                            <li>
                                <strong>NeuroGen : GenSet Health Monitoring Platform (Team Lead)</strong>
                                <ul>
                                    <li>Led a team of 6 in developing NeuroGen, a software platform to remotely monitor generator sets, predict anomalies, schedule maintenance, and estimate Remaining Useful Life (RUL) using machine learning models.</li>
                                    <li>Integrated real-time data streams from AMF controllers</li>
                                    <li>Built predictive models for anomaly detection and RUL estimation</li>
                                    <li>Designed dashboards and visualization tools for operational insights</li>
                                    <li>Improved uptime and reduced unplanned failures across monitored systems</li>
                                </ul>
                            </li>
                            <br />
                            <li>
                                <strong>Visual Inspection System for IOCL (ROS-based)</strong>
                                <ul>
                                    <li>Designed and deployed a smart computer vision pipeline using YOLOv5, EfficientAD, and EasyOCR with NVIDIA Triton Inference Server to inspect LPG cylinders (detecting O-rings, pins, expiry dates, and weight).</li>
                                    <li>Improved accuracy to 93% and reduced manual labor by 90%.</li>
                                </ul>
                            </li>
                            <br />
                            <li>
                                <strong>Automatic Number Plate Recognition (ANPR) System</strong>
                                <ul>
                                    <li>Designed and implemented a robust real-time ANPR system using YOLOv5 for number plate detection and both EasyOCR and PaddleOCR for optical character recognition, depending on plate complexity and font variation.</li>
                                    <li>Integrated with PTZ and fixed surveillance cameras to handle varied viewing angles, motion, and lighting conditions.</li>
                                    <li>Developed a complete front-end interface using Flet (Flutter for Python) for real-time feed visualization, plate recognition logs, and vehicle lookup.</li>
                                    <li>Achieved over 92% detection + recognition accuracy in industrial settings with moving vehicles.</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>

        //second company
                <div className="flex justify-center gap-5 font-poppins text-white  mt-5 mr-20">
                    <div className="w-3/5 p-5 mr-5  bg-violet-950 border-b-4 rounded-md border-white">
                        <h6 className="font-bold text-xl">Artificial Intelligence Intern</h6>
                        <span className="text-gray-400">Accurate Industrial Controls Pvt. Ltd.</span>
                        <ul>
                            <li>Anomaly Detection in copper coils</li>
                            <li>Experimented with computer vision algorithms like Patchcore, YOLO, object tracking, and image compression algorithms.</li>
                            <li>Video streaming using Flask, React, NodeJS, and Express.</li>
                            <li>Worked with ROS, path finding algorithms, Linux, and Gazebo.</li>
                            <li>Modeled and trained LSTM for predicting time until failure of aircraft engines.</li>
                            <li>Focused on building scalable systems implementing machine learning models.</li>
                        </ul>

                    </div>
                    <div className="flex flex-col">
                        <div className="rounded-full border-white " />
                        <div className="w-0.5 bg-white h-full" />
                    </div>
                    <span className="p-5 font-gray-600 text-xl font-bold">August 2023 - November 2023</span>
                </div>

        //third company
                <div className="flex justify-center gap-5 font-poppins text-white  mt-5 mr-20">
                    <span className="p-5 font-gray-600 text-xl font-bold">November 2022 - February 2023</span>
                    <div className="flex flex-col">
                        <div className="rounded-full border-white " />
                        <div className="w-0.5 bg-white h-full" />
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