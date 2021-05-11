import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderLayuot } from '../components/header/HeaderLayout'
import { FooterLayout } from '../components/footer/FooterLayout'
import { fetchposts } from '../store/actions/postAction'
import Image from 'next/image'

export default function Index(prop) {
	return (
		<>
			<HeaderLayuot />
			<FooterLayout />
			<FooterLayout />
		</>
	)
}
