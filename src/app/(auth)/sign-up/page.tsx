export default function SignUp() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
            <h1 className="text-2xl font-bold">Cadastre-se para começar a organizar a resenha</h1>
            <div className="w-full max-w-md">
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Nome" className="p-2 border rounded" required />
                    <input type="email" placeholder="Email" className="p-2 border rounded" required />
                    <input type="password" placeholder="Senha" className="p-2 border rounded" required />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Registrar</button>
                </form>
            </div>
        </div>
    )
}