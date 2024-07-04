# Styled Components

## Styling in React
There are multiple ways to style elements with in components 

* inline
* modules, standard way of linking css to html & targeting elements with class names
* object
* styled

### Inline
One of the most common ways to style a component as it's very easy to test styles. The **_CSS_** property will need to be written in camelCase, not kebab-case like normal **_CSS_**

    <div style={{backgroundColor: 'red'; textDecoration: 'none';}}></div>

### Object
Alternatively you create an object that will have the same values and pass that object to the inline style:

    const divStyle = {
        backgroundColor: 'red'; 
        textDecoration: 'none';
    }

    <div style={divStyle}></div>

## What's the Problem With Inline

Inline styling has a few problems, it is not as performant, scalable, dynamic or easy as styled-components. 

It has really poor support for css features like :hover, :active, :focused. You may have to use state to get it to work correctly.

## Styled Components
This is becoming more and more popular amongst companies to style elements in react. It is written in *javaScript* with an easy to understand syntax. This gives the options to write native **_CSS_** not camelCase like with inline styles.

Styled.components are linked to the component only using what is necessary for the component cutting down on bandwidth by not having to download unused css.

It also allows for easier to maintain code.

     const DivStyle = styled.div` // <--- PascalCase, `` open and close with backticks
        background-color: 'red'; // <--- normal css
        text-decoration: none;
    `

## Props

As we are writing styled components in *javaScript* and using the ` backtick `` ` notation this makes it easy to use variables with in the script. 

If you wanted to change a `backgroundColor: 'red'` to **_'green'_**, you would have to hard code that value every time to the inline style. Which is where **_Props_** can be of advantage.


        <DivStyle color={'green'}></DivStyle>

        const DivStyle = styled.div`
            background-color: ${props => props.color ? props.color : 'red'} <-- written like arrow function
        `

or using a boolean 

        <DivStyle color={true}></DivStyle>

        const DivStyle = styled.div`
            background-color: ${props => props.color ? 'green' : 'red'}
        `

Can also use **_props_** just to set a color, this way the color property can be dynamic to what you ever want to pass in.

        <DivStyle color={'green'}></DivStyle>

        const DivStyle = styled.div`
            background-color: ${props => props.color} <--- using the passed in prop as the color.


 
## Vendor Automatic Prefixing

Properties `like -webkit`, `-moz-`, `-ms` and `-o-` do not need to be entered as styled does this automatically!


## Export & Import

### Export`
There are 2 ways to export a styled component

#### 1. Inline named export:

    ---> export const DivStyle = styled.div`
        background-color: 'red'; // <--- normal css
        text-decoration: none;
    `

#### 2. Object named export:

    const DivStyle = styled.div`
        background-color: 'red'; // <--- normal css
        text-decoration: none;
    `

    ---> export {DivStyle}

### Import
There are also a few ways to import the styles to the component

#### 1. Import Individually

    import {DivStyle, H1Style, SectionStyle} from '../directory'

    return (
        <DivStyle>
            <H1Style><H1Style/>
            <SectionStyle>
                <p></p>
            </SectionStyle>
        </DivStyle>
    )

#### 3. Import All as an Object

    import * as S from '../directory'
    
    return (
        <S.DivStyle>
            <S.H1Style><H1Style/>
            <S.SectionStyle>
                <p></p>
            </S.SectionStyle>
        </S.DivStyle>
    )