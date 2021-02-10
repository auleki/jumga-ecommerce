import styled, { css } from 'styled-components'

let c1, c2, c3, c4, c5

c1 = "#E4DEE4"
c2 = "#686963"
c3 = "#DB5461" // crimson
c4 = "#F7F7F7"


export const Page = styled.div`
  padding: 4em 1em 4em 2em;
  /* height: 50vh; */
  background: ${c4};
  display: absolute;
  z-index: 100;
  overflow-y: hidden;
`
export const JustifiedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const JustifiedRowCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GapedRow = styled.div`
  display: flex;
  justify-content: space-around;

  select {
    margin-left: 1em;
  }
`

export const ProductGrid = styled.div`
  margin-top: 2em;
  display: grid;
  grid-gap: 2em;
  /* background: black; */
  /* overflow-y: scroll; */
  grid-template-columns: repeat(4, 3fr);

  @media (min-width: 825px) and (max-width: 1121px) {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
  }

  @media (min-width: 500px) and (max-width: 824px) {
    display: grid;
    grid-template-columns: repeat(2, 4fr);
  }

  @media (min-width: 320px) and (max-width: 499px) {
    display: grid;
    grid-template-columns: 12fr;
  }
`

export const StyledProductCard = styled.div`
  background-color: ${c4};
  text-align: center;
  border: .1em solid #E2E2E2;
  border-radius: .2em;
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1em;
  transition: 150ms ease-in-out;

  .product_card {
    margin: 0 1em;
  }

  .product_name {
    text-align: left;
    display: flex;
    flex-direction: column;
  }

  .product_action {
    align-self: flex-end;
  }
  
  span {
    text-transform: uppercase;
  }

  span.special {
    color: ${c2};
  }

  .product_image {
    margin: 5em 0;
    img {
      height: auto;
      width: 100%;
    }
  }

  &:hover {
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.10);
  }
`

export const Title = styled.h1`
  font-size: 2.5em;
  display: inline;
`

export const HeaderTitle = styled.h2`
  font-size: 2em;
  display: inline;
  font-weight: 200;
`

export const SubHeader = styled.h4`
  font-size: 1.5em;
  color: ${c2};
  font-weight: 200;
  display: inline;
`

export const CrumbHeader = styled.a`
  font-size: 1.4em;
  color: ${c3};
`

export const Button = styled.button`
  background: ${c3};
  padding: 1em 1em;
  display: flex;
  color: #fff;
  border: 3px solid transparent;
  outline: 0;
  text-transform: uppercase;
  transition: background 300ms ease-in-out, color 300ms ease-in-out;
  border-radius: .2em;
  align-items: center;
  justify-content: space-between;

  ${({ outlined })=> 
  outlined && css `
    background: #fff;
    border: 3px solid ${c3};
    color: #1a1a1a;
  `
}
  
  ${({ center }) => 
    center && css `
      justify-content: center;
    `
  }

  span {
    margin-right: .5em;
  }

  .icon {
    transition: 100ms ease-in;
  }

  &:hover {
    background: ${c4};
    cursor: pointer;
    box-shadow: -1px 1px 5px 0px  #DB546160;
    color: ${c3};

    .icon {
      transform: translateX(.3em);
    }
  }
`

export const CentredSection = styled.div`
  /* background: turquoise; */
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledForm = styled.form`
  /* background: crimson; */
  width: 30rem;
  padding: 2em;

  .input_group {
    display: flex;
    flex-direction: column;
    margin: 1em 0;

    label {
      font-weight: 200;
    }

    input {
      padding: 1em;
      outline: 0;
      border: 1px solid transparent;
      border-radius: .5em;
      transition: 300ms ease-in;

      &:focus {
        color: ${c3};
      }
    }

    button {
      text-align: center;
    }
  }
  
`

export const Row = styled.div`
  display: flex;
  
`


// export const TextLink