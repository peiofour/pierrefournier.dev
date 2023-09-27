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
				'https://res.cloudinary.com/pierrefournier-dev/image/upload/c_scale,h_1566,q_100/v1691334155/4F7A6F07-9294-4BC2-BEA5-8B4F9E9E8C3F-1227-000000C3A1705D79-min_ucmyu0.webp'
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

type Skill = {
	name: string
	image: string
}

const allSkills: {
	'Front-End': Skill[]
	Mobile: Skill[]
	'Back-End': Skill[]
	DevOps: Skill[]
	Databases: Skill[]
} = {
	'Front-End': [
		{
			name: 'React',
			image: '/images/logo_skills/reactLogo.png',
		},
		{
			name: 'Vue.js',
			image: '/images/logo_skills/vueLogo.png',
		},
		{
			name: 'Next.js',
			image: '/images/logo_skills/nextjsLogo.png',
		},
		{
			name: 'Cypress',
			image: '/images/logo_skills/cypressLogo.png',
		},
	],
	Mobile: [
		{
			name: 'React-Native',
			image: '/images/logo_skills/reactLogo.png',
		},
		{
			name: 'Ionic',
			image: '/images/logo_skills/ionicLogo.png',
		},
		{
			name: 'Flutter',
			image: '/images/logo_skills/flutter.png',
		},
	],
	'Back-End': [
		{
			name: 'Node.js',
			image: '/images/logo_skills/nodeLogo.png',
		},
		{
			name: 'Ruby on Rails',
			image: '/images/logo_skills/railsLogo.png',
		},
		{
			name: 'TypeScript',
			image: '/images/logo_skills/typescriptLogo.png',
		},
	],
	DevOps: [
		{
			name: 'Docker',
			image: '/images/logo_skills/docker.png',
		},
		{
			name: 'Git',
			image: '/images/logo_skills/gitLogo.png',
		},
		{
			name: 'Github Actions',
			image: '/images/logo_skills/githubLogo.png',
		},
		{
			name: 'Terraform',
			image: '/images/logo_skills/terraformLogo.png',
		},
		{
			name: 'Gitlab CI/CD',
			image: '/images/logo_skills/gitlabLogo.png',
		},
		{
			name: 'Azure Pipelines',
			image: '/images/logo_skills/azure_pipelines.png',
		},
	],
	Databases: [
		{
			name: 'PostgreSQL',
			image: '/images/logo_skills/postgresLogo.png',
		},
		{
			name: 'MySQL',
			image: '/images/logo_skills/mysqlLogo.png',
		},
		{
			name: 'Redis',
			image: '/images/logo_skills/redisLogo.png',
		},
		{
			name: 'MongoDB',
			image: '/images/logo_skills/mongoLogo.png',
		},
	],
}

const AboutPage = () => {
	return (
		<Layout>
			<div className='max-w-4xl flex flex-col gap-10'>
				<h1 className='text-center font-bold'>hello, friend</h1>
				<StaticImage
					src='https://res.cloudinary.com/pierrefournier-dev/image/upload/c_scale,h_1566,q_100/v1691334155/4F7A6F07-9294-4BC2-BEA5-8B4F9E9E8C3F-1227-000000C3A1705D79-min_ucmyu0.webp'
					alt='Portrait de Pierre Fournier'
					placeholder='blurred'
					width={500}
					height={350}
					className='rounded-xl mx-auto'
				/>
				<div className='font-medium text-xl gap-3 flex flex-col'>
					<p>Je m'appelle Pierre Fournier.</p>
					<p>
						Passionné par le développement et les nouvelles technologies, je
						suis un développeur Full Stack indépendant basé à Toulouse avec plus
						de 5 ans d'expérience dans la création d'applications web et mobiles
						sur mesure.
					</p>

					<p>
						J'ai une solide expertise en React, Vue, Node.js et Ruby on Rails,
						ce qui me permet d'accompagner mes clients dans la concrétisation de
						leurs projets et de leur apporter des solutions efficaces et
						performantes.
					</p>

					<p>
						Mon engagement envers la réussite de vos projets :
						<br />
						- Analyse approfondie de vos besoins et attentes pour une meilleure
						compréhension de vos objectifs.
						<br />
						- Proposition de solutions techniques adaptées et personnalisées.
						<br />
						- Développement d'applications web et mobiles performantes,
						sécurisées et évolutives.
						<br />
						- Mise en place de tests automatisés et d'intégration continue pour
						garantir la qualité du code.
						<br />
						- Accompagnement dans le déploiement de l'application et la
						maintenance.
						<br />- Écriture de documentations pour garantir la maintenance du
						code sur le temps long.
					</p>
					<p>
						Je peux aussi intervenir dans un cadre moins technique, pour
						conseiller sur l'ergonomie et la conception de sites.
					</p>
					<p>
						🇫🇷🇬🇧 J'ai une bonne maîtrise de l'anglais, je peux travailler sans
						soucis en Français comme en Anglais.
					</p>
					<p>
						Mon CV est disponible{' '}
						<a
							href='https://drive.google.com/file/d/1K6zk6tRDunSRphVcZX02TFpjIU1PS4sv/view?usp=sharing'
							target='_blank'
							className='underline'
						>
							ici
						</a>
						.
					</p>
				</div>
				<div className='flex flex-col gap-3 text-xl text-center'>
					<h2 className='font-bold'>Envie de collaborer avec moi ?</h2>
					<p className='text-center'>
						N'hésitez pas à me contacter par{' '}
						<a href='mailto:contact@pierrefournier.dev' className='underline'>
							mail
						</a>{' '}
						ou sur{' '}
						<a
							href='https://www.linkedin.com/in/pierrefournier1/'
							target='_blank'
							rel='noreferrer'
							className='underline'
						>
							LinkedIn
						</a>
						.
					</p>
					<h4>Tarif journalier moyen : 400€ HT</h4>
				</div>
				<h2 className='font-bold text-center'>Skills</h2>
				<div className='text-center flex flex-col gap-20 text-lg'>
					{Object.keys(allSkills).map((skill, i) => (
						<div key={i} className='flex flex-col gap-8'>
							<h3 className='font-bold text-xl'>{skill}</h3>
							<div className='flex flex-wrap justify-center gap-8'>
								{allSkills[skill].map((skill: Skill, i: React.Key) => (
									<div key={i} className='flex flex-col gap-5 w-[150px] lg:w-[200px]'>
										<img
											src={skill.image}
											alt={`${skill.name} logo`}
											className='max-h-[55px] object-contain flex-1'
											placeholder='none'
										/>
										<p>{skill.name}</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default AboutPage
