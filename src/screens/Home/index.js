import React from 'react';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import {Wrapper, Header, BalanceContainer, BalanceTitle, Balance, Container} from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';

export default function Home () {
     return <Wrapper>
          <Container>
               <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                    <BalanceContainer>
                         <BalanceTitle>Meu Saldo</BalanceTitle>
                         <Balance>R$ 0,00</Balance>
                    </BalanceContainer>
                    <AntDesign name="gift" size={30} color="#10c86e" />
               </Header>

               <Suggestions />
               <Activities />
          </Container>
     </Wrapper>;
}