"use client"

import Container from './ui/container'
import 'react-vertical-timeline-component/style.min.css'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'

const LevelCard =(props : {level : {head: string,para: string}}) =>{
    const {level} = props
    return (
    <VerticalTimelineElement contentStyle={{boxShadow: "none",color: '#000',padding: "0",width:'40rem',maxWidth:"80%"}} 
    contentArrowStyle={{width: '0px'}} 
    // date={level.date}
    iconStyle={{background: "#6544F3"}}
    >
        <h3 className="vertical-timeline-element-titletext-[24px] font-bold">{level.head}</h3>
        <p className="text-secondary text-[16px] font-semibold">{level.para}</p>
      
    </VerticalTimelineElement>
    )
}

const Levels = () => {
    const levels =[
        {
        head: "Lorem ipsum dolor sit.",
        para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptate incidunt adipisci dicta facilis optio eveniet illum, quidem mollitia voluptas harum ab veniam voluptatum obcaecati, dolorum aspernatur voluptatibus natus eius?"
        },
        {
        head: "Lorem ipsum dolor sit.",
        para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptate incidunt adipisci dicta facilis optio eveniet illum, quidem mollitia voluptas harum ab veniam voluptatum obcaecati, dolorum aspernatur voluptatibus natus eius?"
        },
        {
        head: "Lorem ipsum dolor sit.",
        para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptate incidunt adipisci dicta facilis optio eveniet illum, quidem mollitia voluptas harum ab veniam voluptatum obcaecati, dolorum aspernatur voluptatibus natus eius?"
        },
        {
        head: "Lorem ipsum dolor sit.",
        para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex voluptate incidunt adipisci dicta facilis optio eveniet illum, quidem mollitia voluptas harum ab veniam voluptatum obcaecati, dolorum aspernatur voluptatibus natus eius?"
        },
    ]

    

  return (
    <div className=''>
        <Container className='m-auto'>
            
            <h4 className='text-base text-semibold'>Wrong with self-improvement & how we&apos;re fixing it.</h4>
            <h1 className='text-4xl my-3 font-bold'>Self-improvement. Ugh.</h1>
            <div className="level max-w-4xl m-auto flex flex-col items-center justify-center">
                <VerticalTimeline layout="1-column-left" lineColor={'#6544F3'} >
                    {levels.map((level,index) =>(
                    <LevelCard key={index} level={level}/>
                    ))}
                </VerticalTimeline>
            </div>
        </Container>
    </div>
  )
}

export default Levels
