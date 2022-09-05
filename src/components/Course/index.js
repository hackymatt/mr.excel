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
                <CourseTitle>Excel Podstawowy</CourseTitle>
                <CourseImage src={podstawowy} />
                <CourseDescription>Poznaj podstawy Excel'a w 10 lekcjach</CourseDescription>
                <CoursePrice>79.99 zł</CoursePrice>
            </CourseCard>
            <CourseCard href="https://www.udemy.com/course/excel-sredniozaawansowany/?referralCode=AC386CE94A2752932CE8" target="_blank">
                <CourseTitle>Excel Średniozaawansowany</CourseTitle>
                <CourseImage src={średniozaawansowany} />
                <CourseDescription>Poznaj średniozaawanosowane funkcje Excel'a w 10 lekcjach</CourseDescription>
                <CoursePrice>89.99 zł</CoursePrice>
            </CourseCard>
            <CourseCard href="https://www.udemy.com/course/excel-podstawowy-sredniozaawansowany/?referralCode=87027D448EE1004791B2" target="_blank">
                <CourseTitle>Excel Podstawowy + Średniozaawansowany</CourseTitle>
                <CourseImage src={podstawowy_średniozaawansowany} />
                <CourseDescription>Poznaj Excela od zera i zostań średniozaawansowanym użytkownikiem!</CourseDescription>
                <CoursePrice>129.99 zł</CoursePrice>
            </CourseCard>
        </CourseWrapper>
      </CourseContainer>
    </>
  )
}

export default Course
