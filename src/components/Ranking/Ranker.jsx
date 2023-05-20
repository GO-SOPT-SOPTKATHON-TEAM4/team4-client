import styled from 'styled-components';

const Ranker = () => {

    return (
        <RankerWrapper>
            <Image src = {src} alt = {alt} />
            <Explain>
                <Comment> {comment} </Comment>
                <Nickname> {nickname} </Nickname>
            </Explain>
        </RankerWrapper>
    )
}
export default Ranker;
  
  
const St = {
    RankerWrapper : styled.div`
    display: flex;
    box-shadow: 0rem 0.3rem 1rem rgba(0, 0, 0, 0.05);
    border-radius: 1.6rem;
    `,

    Image: styled.img`
    display: flex;
    width: 5.4rem;
    height: 5.4rem;
    `,
    Explain: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 3.5rem;
    `,
    Comment: styled.h1`
    `,
    Nickname: styled.h1`
    margin-top: 0.8rem;
    `,
}