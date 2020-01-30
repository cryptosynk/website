import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Serverless AI</h1>
				<h4>
				We help startups productionizing Artificial Intelligent applications.
				</h4>
				
				<Button as={AnchorLink} href="#contact">
					Hire Us
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Zahid and I’m a Backend & Devops engineer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
