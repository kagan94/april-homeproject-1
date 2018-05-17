import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledFollower = styled.div`
  display: inline-block
  margin: 10px
`;

export class Follower extends PureComponent {
  render() {
    const {login, avatar} = this.props;
    return (
      <StyledFollower>
        <Link to={`/users/${login}`}><b>{login}</b></Link><br/>
        <img src={avatar} alt={login} width={100} height={100}/>
      </StyledFollower>
    );
  }
}

export default Follower;
