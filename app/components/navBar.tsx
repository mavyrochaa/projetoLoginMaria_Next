'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import './navBar.css';

export default function NavBar() {

  const router = useRouter();

  // pega o nome salvo no cookie
  const nome = Cookies.get('userName');

  function logout() {

    Cookies.remove('logged');
    Cookies.remove('userName');

    router.push('/');

  }

  return (

    <nav className="navbar">

      <div className="navbar-logo">
        Seja bem-vindo!, {nome || 'Usuário'}
      </div>

      <div className="navbar-links">

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/dashboard/produtos">
          Produtos
        </Link>

        <button
          onClick={logout}
          className="btn-sair"
        >
          Sair do sistema
        </button>

      </div>

    </nav>

  );
}