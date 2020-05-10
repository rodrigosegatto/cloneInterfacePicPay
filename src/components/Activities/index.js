import React from 'react';
import {Container, Header, Title, Card, CardHeader, Avatar, Description, Bold} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@rodrigosegatto</Bold>
                    </Description>
                </CardHeader>
            </Card>
        </Container>
    );
}