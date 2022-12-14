import { useContext } from 'react';

import styles from './styles.module.scss';

import Link from 'next/link';
import Image from 'next/future/image';

import { FiLogOut } from 'react-icons/fi';

import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
    const { signOut } = useContext(AuthContext);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>

                <Link href='/dashboard'>
                    <Image 
                    src="/logo.svg" 
                    width={190} 
                    height={60} 
                    alt="logo" 
                    />
                </Link>

                <nav className={styles.navMenu}>
                    <Link href='/category'>
                        <a>New Category</a>
                    </Link>

                    <Link href='/product'>
                        <a>Menu</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#FFF' size={24} />
                    </button>
                </nav>

            </div>
        </header>
    )
}