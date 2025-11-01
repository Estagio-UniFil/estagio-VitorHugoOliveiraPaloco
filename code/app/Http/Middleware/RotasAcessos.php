<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RotasAcessos
{
    public function handle(Request $request, Closure $next): Response
    {
        $rotaAtual = $request->route()->getName();
        $user = Auth::user();

        if (!$user) {
            abort(403, 'Usuário não autenticado.');
        }

        if (!$user->acesso($rotaAtual)) {
            abort(403, 'Acesso não autorizado.');
        }

        return $next($request);
    }
}
