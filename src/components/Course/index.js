import React from 'react'
import {
  CourseContainer,
  CourseWrapper,
  CourseCard,
  CourseDescription,
  CourseTitle,
  CoursePrice,
  CourseImage,
  TopLine,
  Heading
} from './CourseElements'
import podstawowy from '../../images/podstawowy.jpg'
import średniozaawansowany from '../../images/średniozaawansowany.jpg'
import podstawowy_średniozaawansowany from '../../images/podstawowy+średniozaawansowany.jpg'

const Course = () => {
  return (
    <>
      <CourseContainer id="course">
        <TopLine>MR. EXCEL</TopLine>
        <Heading>Kursy</Heading>
        <CourseWrapper>
            <CourseCard href="https://www.udemy.com/course/excel-podstawowy/learn/?referralCode=839AD8A6AFA31478A2D1" target="_blank">                
                <CourseImage src={podstawowy} />
                <CourseTitle>Excel Podstawowy</CourseTitle>
                <CourseDescription>Poznaj podstawy Excel'a w 10 lekcjach</CourseDescription>
                <CoursePrice>79.99 zł</CoursePrice>
            </CourseCard>
            <CourseCard href="https://www.udemy.com/course/excel-sredniozaawansowany/?referralCode=AC386CE94A2752932CE8" target="_blank">
                <CourseImage src={średniozaawansowany} />
                <CourseTitle>Excel Średniozaawansowany</CourseTitle>
                <CourseDescription>Poznaj średniozaawanosowane funkcje Excel'a w 10 lekcjach</CourseDescription>
                <CoursePrice>89.99 zł</CoursePrice>
            </CourseCard>
            <CourseCard href="https://www.udemy.com/course/excel-podstawowy-sredniozaawansowany/?referralCode=87027D448EE1004791B2" target="_blank">
                <CourseImage src={podstawowy_średniozaawansowany} />
                <CourseTitle>Excel Podstawowy + Średniozaawansowany</CourseTitle>
                <CourseDescription>Poznaj Excela od zera i zostań średniozaawansowanym użytkownikiem!</CourseDescription>
                <CoursePrice>129.99 zł</CoursePrice>
            </CourseCard>
        </CourseWrapper>
      </CourseContainer>
    </>
  )
}

export default Course
