import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Item } from './Placeholder.styles';


const Placeholder: React.FC = () => {
    return(
        <Container>
            {
                [1,2,3,4,5].map((item, indx) => (
                    <Item key={indx}>
                        <Skeleton height={100} />
                    </Item>
                ))
            }
        </Container>
    )
}

export default Placeholder
