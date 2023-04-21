import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

export function Head() {
	return (
		<Seo
			title={'À propos'}
			description={
				"Je m'appelle Pierre Fournier, j'ai 25 ans, je suis développeur fullstack freelance."
			}
			image={
				'https://res.cloudinary.com/pierrefournier-dev/image/upload/v1648208768/about/DSCF7848_nobjf9.jpg'
			}
			slug={'about'}
			type='website'
			keywords={[
				'pierre fournier',
				'développeur',
				'freelance',
				'blog',
				'pierre',
				'fournier',
				'tech',
				'startup',
				'politique',
			]}
		/>
	)
}

const AboutPage = () => {
	return (
		<Layout>
			<div className='post site-about'>
				<h1>hello, friend</h1>
				<img
					src='https://res.cloudinary.com/pierrefournier-dev/image/upload/c_scale,h_1055/v1662735743/about/9CE5CA18-B041-48D8-9487-288B8C74DD74_j0nyiu.png'
					alt='Portrait de Pierre Fournier'
				/>
				<p>Je m'appelle Pierre Fournier.</p>
				<p>
					Je suis développeur fullstack en freelance. J'ai 25 ans,
					j'habite à Toulouse, dans le sud de la France et je suis
					originaire du Pays Basque. Je suis passionné par de nombreux
					sujets, notamment la tech, les startups, le cinéma, la
					photographie, la cuisine, l'histoire et l'astronomie.
				</p>
				<p>
					Mon CV est disponible{' '}
					<a href='https://drive.google.com/file/d/119SGrsGAWo9syNnZZoHQt6d_SFdKuX-l/view?usp=sharing'>
						ici
					</a>
					.
				</p>
				<h2>Skills</h2>
				<h3>Front-end</h3>
				<ul className='site-about__skills row justify-content-center px-0'>
					<li className='col-6 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/reactLogo.png'
								alt='React logo'
								placeholder='none'
							/>
							<p>React</p>
						</div>
					</li>
					<li className='col-6 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/vueLogo.png'
								alt='Vue logo'
								placeholder='none'
							/>
							<p>Vue.js</p>
						</div>
					</li>
					<li className='col-6 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/nextjsLogo.png'
								alt='Next.js logo'
								placeholder='none'
							/>
							<p>Next.js</p>
						</div>
					</li>
					<li className='col-6 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/cypressLogo.png'
								alt='Cypress logo'
								placeholder='none'
							/>
							<p>Cypress</p>
						</div>
					</li>
				</ul>

				<h3>Mobile</h3>
				<ul className='site-about__skills row justify-content-center px-0'>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/reactLogo.png'
								alt='React-Native logo'
								placeholder='none'
							/>
							<p>React-Native</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/ionicLogo.png'
								alt='Ionic logo'
								placeholder='none'
							/>
							<p>Ionic</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/flutter.png'
								alt='Flutter logo'
								placeholder='none'
							/>
							<p>Flutter</p>
						</div>
					</li>
				</ul>

				<h3>Back-end</h3>
				<ul className='site-about__skills row justify-content-center px-0'>
					<li className='col-8 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/nodeLogo.png'
								alt='Node.js logo'
								placeholder='none'
							/>
							<p>Node.js</p>
						</div>
					</li>
					<li className='col-8 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/railsLogo.png'
								alt='Ruby on Rails logo'
								placeholder='none'
							/>
							<p>Ruby on Rails</p>
						</div>
					</li>
					<li className='col-8 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/typescriptLogo.png'
								alt='TypeScript logo'
								placeholder='none'
							/>
							<p>TypeScript</p>
						</div>
					</li>
				</ul>

				<h3>DevOps</h3>
				<ul className='site-about__skills row justify-content-center px-0'>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/docker.png'
								alt='Docker logo'
								placeholder='none'
							/>
							<p>Docker</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/gitLogo.png'
								alt='Git logo'
								placeholder='none'
							/>
							<p>Git</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/githubLogo.png'
								alt='Github logo'
								placeholder='none'
							/>
							<p>Github Actions</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/gitlabLogo.png'
								alt='Gitlab logo'
								placeholder='none'
							/>
							<p>Gitlab CI/CD</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/azure_pipelines.png'
								alt='Azure logo'
								placeholder='none'
							/>
							<p>Azure Pipelines</p>
						</div>
					</li>
				</ul>

				<h3>Databases</h3>
				<ul className='site-about__skills row justify-content-center px-0'>
					<li className='col-6 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/postgresLogo.png'
								alt='PostgreSQL logo'
								placeholder='none'
							/>
							<p>PostgreSQL</p>
						</div>
					</li>
					<li className='col-6 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/mysqlLogo.png'
								alt='MySQL logo'
								placeholder='none'
							/>
							<p>MySQL</p>
						</div>
					</li>
					<li className='col-6 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/redisLogo.png'
								alt='Redis logo'
								placeholder='none'
							/>
							<p>Redis</p>
						</div>
					</li>
					<li className='col-6 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/mongoLogo.png'
								alt='MongoDB logo'
								placeholder='none'
							/>
							<p>MongoDB</p>
						</div>
					</li>
				</ul>
			</div>
		</Layout>
	)
}

export default AboutPage