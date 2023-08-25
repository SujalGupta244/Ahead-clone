"use client"

import Container from './ui/container'
import 'react-vertical-timeline-component/style.min.css'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'

const LevelCard =(props : {level : {head: string,para: string}}) =>{
    const {level} = props
    return (
    <VerticalTimelineElement contentStyle={{background: "#6544f3", color: '#000',padding: "0"}} 
    contentArrowStyle={{width: '0px'}} 
    // date={level.date}
    iconStyle={{background: "#6544F3", width: "1rem",height: "1rem",margin:"0"}}
    // icon={
    //   <div className='flex items-center justify-center'>
    //     {/* <img src={level.icon} alt={level.company_name} className="w-[60%] h-[60%] object-contain"/> */}
    //   </div>
    // }
    >
        <h3 className="vertical-timeline-element-titletext-[24px] font-bold">{level.head}</h3>
        <p className="text-secondary text-[16px] font-semibold">{level.para}</p>
      
    </VerticalTimelineElement>
    )
}

const Levels = () => {
    const levels =[
        {
        head: "Lorem",
        para: "Lorem slkf lkj lskdfjwlkj lkej w"
        },
        {
        head: "Lorem",
        para: "Lorem slkf lkj lskdfjwlkj lkej w"
        },
        {
        head: "Lorem",
        para: "Lorem slkf lkj lskdfjwlkj lkej w"
        },
        {
        head: "Lorem",
        para: "Lorem slkf lkj lskdfjwlkj lkej w"
        },
    ]

    

  return (
    <div className='bg-black'>
        <Container>
            <h4>Wrong with self-improvement & how we're fixing it.</h4>
            <h1>Self-improvement. Ugh.</h1>
            <div className="level">
           
            
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
