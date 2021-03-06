import styled from "styled-components"

type TabsProps = {
    sticky: boolean
    darkModeEnabled: boolean
}

type TabProps = {
    isActive: boolean
}

type PriceItemProps = {
    darkModeEnabled: boolean
}

type PriceProps = {
    darkModeEnabled: boolean
}

export const Container = styled.div`
    max-width: 600px;
    margin: 0rem auto;
    padding-top: 2rem;
`;

export const PriceItem = styled.div<PriceItemProps>`
    ${props => !props.darkModeEnabled && `
        box-shadow: 0 0px 21px 0 #e5eaee;  
    `}

    ${props => props.darkModeEnabled && `
        color: #666; 
    `}

    padding: 2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => (props.darkModeEnabled ? "#1a1a1b" : "white")};
    cursor: pointer;
    transition: box-shadow 0.3s ease-in;

    ${props => !props.darkModeEnabled && `
        &:hover {
            box-shadow: 0 0px 11px 0 #e5eaee;
        }
    `}
`;

export const Left = styled.div``;
export const Right = styled.div``;

export const Title = styled.h3``;
export const Company = styled.h4`
    color: #666;
`;

export const Price = styled.p<PriceProps>`
    color: ${props => (props.darkModeEnabled ? "#666" : "#008dc6")};
    font-size: 1.2rem;
`;

export const Tabs = styled.ul<TabsProps>`
    text-align: center;
    margin-bottom: 2rem !important;
    transition: all 0.3s ease-in-out;
    ${props => props.sticky && `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1rem 0 !important;
    `}

    background-color: ${props => (props.darkModeEnabled ? "black" : "white")};

`;

export const Tab = styled.li<TabProps>`
    display: inline-block;
    color: #666;
    padding: 0.5rem 1rem;
    ${props => props.isActive && `border-bottom: 1px solid #666;`}
    cursor: pointer;
`;
