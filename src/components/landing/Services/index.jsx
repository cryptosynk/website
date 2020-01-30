import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import data from 'assets/illustrations/data.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'
import detailed_analysis from "assets/illustrations/detailed_analysis.svg"

export const Services = () => {
  return (
    <Wrapper as={Container} id="services">
      <h1>Services</h1>
      <Grid>
            <Item
              key={1}
              as="a"
              href="#"
              target="_blank"
            rel="noopener noreferrer">
              <Card>
              <Content>
                <h2>Consulting</h2>
                <img style={{opacity: 0.8}} src={detailed_analysis} alt="analysis" />
                <p>
                We provide strategic guidance throughout your ML development projects. Starting with goal-setting and analysis of your business processes and data sources, we offer scenarios for business process optimization with machine learning algorithms, define the expected results, select technologies, and outline the development scope.
                </p>
              </Content>
              </Card>
            </Item>
            <Item
              key={2}
              as="a"
              href="#"
              target="_blank"
            rel="noopener noreferrer">
              <Card>
              <Content>
                <h2>Implementation</h2>
                <img src={data} alt="Blockchain" />
                <p>
                We shape ML models into fully functioning AI solutions. Our ML experts ensure that machine learning solutions operate smoothly within software ecosystems and perform properly without jeopardizing the integrity and operation of deployed systems.
                </p>
              </Content>
              </Card>
            </Item>
      </Grid>
      {/* <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats>
                <div>
                  <img src={starIcon} alt="stars" />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <img src={forkIcon} alt="forks" />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid> */}
    </Wrapper>
  )
}
