import React from "react"
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameDiv = styled.div`
  font-size: 32px;
`;

const Subtext = styled.div`
  font-size: 16px;
`;

export function Header() {
    return (
        <HeaderWrapper>
            <div>
                <NameDiv>Dylan Harness</NameDiv>
                <Subtext>Motion Designer</Subtext>
            </div>
            <div>
                links
            </div>


            <div>
                <div className="header-name">Dylan Har</div>
                <div>dmkdj</div>
            </div>

        </HeaderWrapper>
    );
}