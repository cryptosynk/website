import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import ml from 'assets/illustrations/dev.svg'
import blockchain from 'assets/illustrations/bitcoin.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'
import { Skills } from '../Skills'

export const Services = () => {
  return (
    <Wrapper as={Container} id="services">
      <h2>Services</h2>
      <Grid>
            <Item
              key={1}
              as="a"
              href="#"
              target="_blank"
            rel="noopener noreferrer">
              <Card>
              <Content>
                <h4>Blockchain solutions</h4>
                <img style={{opacity: 0.8}} src={blockchain} alt="Blockchain" />
                <h4>Comprehensive offerings to guide your blockchain journey</h4>
                <p>
                We help clients explore every aspect of blockchain and build solutions designed to deliver value.</p>
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
                <h4>Machine Learning Solutions</h4>
                <img src={ml} alt="Blockchain" />
                <h4>We can help you build DL/ML Products</h4>
                <p>
                  We use machine learning (ML) tools and algorithms to help companies develop machine learning products and solutions.
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
