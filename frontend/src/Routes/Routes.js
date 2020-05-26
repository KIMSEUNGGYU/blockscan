import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Index from '../Components/Containers/Index/ReturnIndexPage';
import List from '../Components/Containers/Content/List/ReturnList';
import Detail from '../Components/Containers/Content/Detail/ReturnDetail';

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

const Routes = () => {
  return (
    <Main>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/blocks' component={List} />
        <Route exact path='/blocks?pn=:pn&p=:p' component={List} />
        <Route exact path='/txs' component={List} />
        <Route exact path='/txs?pn=:pn&p=:p' component={List} />
        <Route exact path='/block/:blockNumber' component={Detail} />
        <Route exact path='/tx/:txHash' component={Detail} />
      </Switch>
    </Main>
  );
};

export default Routes;
