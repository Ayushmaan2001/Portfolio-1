import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex flex-row justify-around bg-third' id='#about-me flex-nowrap'>
            <div className='flex flex-col p-4 mt-[5rem]'>
                <h2 className='text-[#f0535d] text-[1.5rem] font-bold'>ABOUT ME</h2>
                <h3 className='text-[#1c2273] text-[2.5rem] font-semibold'>Who is Shubham?</h3>
                <img src={require('../assets/personjpg.jpg')} className='w-80 h-80 rounded-full mt-6'/>
            </div>
            <div className='flex flex-col w-[50rem] p-4 mt-[9rem]'>
                <h3 className='text-[#1c2273] text-[1.55rem] p-0 font-semibold'>
                A curiosity-driven developer with design chops.
                </h3>
                <div>
                <p className='text-black text-[1.3rem] p-0'>Dynamic and skilled software developer with expertise in C++, Python, Java, React, Bootstrap, and the Qt framework. Passionate about open source contributions and actively engaged in the open source community. Regularly practices problem-solving skills through platforms like LeetCode. Looking for a full time Software Developer role, feel free to contact me.</p>
                </div>


                <form action='https://drive.google.com/file/d/15TLi3-uss6GC1rAUBF5apNz0kvNS3jZ4/view?usp=drive_link' target='_blank'>
                    <p className='text-[1.2rem]' >Link to <button className='text-[#bc1a45] hover:text-[#bc4d1a]'  style={{textDecoration: "underline", paddingTop: "2rem"}}>Resume</button></p>
                </form>
                <div className='flex flex-row flex-wrap'>
                
                    <a href="https://github.com/Shubham-100" target="_blank"><img src={require('../assets/github.png')} className='w-10 h-10 rounded-full mt-2 mr-2' /></a>
                    <a href="https://leetcode.com/aryan10jangid/" target="_blank"><img src={require('../assets/lc.png')} className='w-10 h-10 rounded-full mt-2' /></a>
                    <a href="https://www.linkedin.com/in/shubham-686615155/" target="_blank"><img src={require('../assets/linkedin.png')} className='w-10 h-10 rounded-full mt-2 mr-2' /></a>
                    <a href="https://twitter.com/AryanJangid20" target="_blank"><img src={require('../assets/tw.png')} className='w-10 h-10 rounded-full mt-2 mr-2' /></a>
                    <a href="mailto:aryan10jangid@gmail.com"> <img src={require('../assets/gmail.png')} className='w-10 h-10 rounded-full mt-2' /></a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
