'use client';

import { useParams } from 'next/navigation';

import NavBar from '@/app/components/navBar';
import FormEstoque from '@/app/components/EstoqueForm';

export default function EditarEstoquePage() {

    const params = useParams();

    const id = Number(params.id);

    return (
        <>
            <NavBar />
            <FormEstoque estoqueId={id} />
        </>
    );
}