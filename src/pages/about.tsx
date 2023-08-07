import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

export function Head() {
	return (
		<Seo
			title={'À propos'}
			description={
				"Je m'appelle Pierre Fournier, j'ai 26 ans, je suis développeur fullstack en freelance."
			}
			image={
				'https://res.cloudinary.com/pierrefournier-dev/image/upload/v1691334155/4F7A6F07-9294-4BC2-BEA5-8B4F9E9E8C3F-1227-000000C3A1705D79-min_ucmyu0.jpg'
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
				'numérique',
				'France',
			]}
		/>
	)
}

const AboutPage = () => {
	return (
		<Layout>
			<div className='post site-about'>
				<h1>hello, friend</h1>
				<div className='site-about__portrait py-2'>
					<StaticImage
						src='https://res.cloudinary.com/pierrefournier-dev/image/upload/v1691334155/4F7A6F07-9294-4BC2-BEA5-8B4F9E9E8C3F-1227-000000C3A1705D79-min_ucmyu0.jpg'
						alt='Portrait de Pierre Fournier'
						placeholder='blurred'
						width={500}
						height={350}
					/>
				</div>
				<p>Je m'appelle Pierre Fournier.</p>
				<p>
					Je suis développeur fullstack en freelance. J'ai 26 ans et j'habite à
					Toulouse. Je développe des applications web et mobiles, des API, des
					infrastructures métier back-end et des applications de bureau. Je
					propose également des prestations de DevOps et de cloud (AWS, Azure,
					GCP, OVH Cloud, Scaleway).
				</p>
				<p>
					Mon CV est disponible{' '}
					<a
						href='https://drive.google.com/file/d/1Rec2RRCfNpbQVw6rBqUymjLTy9QAqQXC/view?usp=sharing'
						target='_blank'
					>
						ici
					</a>
					.
				</p>
				<h2 className='pt-4'>Envie de collaborer avec moi ?</h2>
				<p>
					Je suis disponible pour différentes prestations de développement, de
					DevOps, de cloud ou de conseils à destination de tous types
					d'organisations ou entreprises. N'hésitez pas à me contacter par{' '}
					<a href='mailto:pierre.fournier@protonmail.com'>mail</a> ou sur{' '}
					<a
						href='https://www.linkedin.com/in/pierrefournier1/'
						target='_blank'
						rel='noreferrer'
					>
						LinkedIn
					</a>
					.
				</p>
				<h4>Tarif journalier moyen : 400€ HT</h4>
				<h2 className='pt-5'>Skills</h2>
				<h3>Front-end</h3>
				<ul className='site-about__skills row justify-content-center px-0'>
					<li className='col-6 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/reactLogo.png'
								alt='React logo'
								placeholder='none'
								height={55}
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
								height={55}
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
								height={55}
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
								height={55}
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
								height={55}
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
								height={55}
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
								height={55}
							/>
							<p>Flutter</p>
						</div>
					</li>
				</ul>

				<h3>Back-end</h3>
				<ul className='site-about__skills row justify-content-center px-0'>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/nodeLogo.png'
								alt='Node.js logo'
								placeholder='none'
								height={55}
							/>
							<p>Node.js</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/railsLogo.png'
								alt='Ruby on Rails logo'
								placeholder='none'
								height={55}
							/>
							<p>Ruby on Rails</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/typescriptLogo.png'
								alt='TypeScript logo'
								placeholder='none'
								height={55}
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
								height={55}
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
								height={55}
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
								height={55}
							/>
							<p>Github Actions</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/terraformLogo.png'
								alt='Terraform logo'
								placeholder='none'
								height={55}
							/>
							<p>Terraform</p>
						</div>
					</li>
					<li className='col-5 col-md d-flex'>
						<div className='my-3 mx-auto'>
							<StaticImage
								src='../assets/images/logo_skills/gitlabLogo.png'
								alt='Gitlab logo'
								placeholder='none'
								height={55}
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
								height={55}
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
								height={55}
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
								height={55}
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
								height={55}
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
								height={55}
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
