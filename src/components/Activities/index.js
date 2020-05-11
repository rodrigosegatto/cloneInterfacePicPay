import React from 'react';
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import {
    Container, Header, Title, Card, CardHeader, Avatar, 
    Description, Bold,CardBody, UserName, CardFooter, Details, 
    Value, Divider, Date, Actions, Option, OptionLabel
} from './styles';

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
                <CardBody>
                    <UserName>Rodrigo Segatto</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$18,00</Value>
                        <Divider />
                        
                        <Feather name="lock" color="#fff" size={14} />
                        <Date>
                            há 2 dias
                        </Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons size={14} color="#fff" name="comment-outline" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign size={14} color="#fff" name="hearto" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}