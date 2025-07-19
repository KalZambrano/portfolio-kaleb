import SpainFlag from '@/components/flags/Spain.astro';
import UnitedStatesFlag from '@/components/flags/UnitedStates.astro';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.habilidades': 'Habilidades',
		'nav.proyectos': 'Proyectos',
		'nav.certificados': 'Certificados',
		'nav.sobremi': 'Sobre mí',
	},
	en: {
		'nav.habilidades': 'Skills',
		'nav.proyectos': 'Projects',
		'nav.certificados': 'Certificates',
		'nav.sobremi': 'About Me',
	},
} as const;

export const routes = {
	es: {
		habilidades: 'habilidades',
		proyectos: 'proyectos',
		certificados: 'certificados',
		sobremi:'sobremi'
	},
	en: {
		skills: 'skills',
		projects: 'projects',
		certificates: 'certificates',
		aboutme:'aboutme'
	},
};