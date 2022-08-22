import React from 'react'

const Course = () => {
  return (
    <>
      <CourseContainer>
        <CourseH1>Dostępne kursy</CourseH1>
        <CourseWrapper>
            <CourseCard>
                <CoursTitle>Excel Podstawowy</CoursTitle>
                <CourseImage src={Image1} />
                <CourseH2>Poznaj podstawy Excel w 10 lekcjach</CourseH2>
                <CoursePrice>79.99 zł</CoursePrice>
            </CourseCard>
            <CourseCard>
                <CoursTitle>Excel Średniozaawansowany</CoursTitle>
                <CourseImage src={Image1} />
                <CourseH2>Poznaj średniozaawanosowane funckje Excel w 10 lekcjach</CourseH2>
                <CoursePrice>89.99 zł</CoursePrice>
            </CourseCard>
            <CourseCard>
                <CoursTitle>Excel Podstawowy+Średniozaawansowany</CoursTitle>
                <CourseImage src={Image1} />
                <CourseH2>Poznaj Excela od zera i zostań Średniozaawansowanym użytkownikiem!</CourseH2>
                <CoursePrice>129.99 zł</CoursePrice>
            </CourseCard>
        </CourseWrapper>
      </CourseContainer>
    </>
  )
}

export default Course
