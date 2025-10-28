import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see routes/web.php:13
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:13
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see routes/web.php:13
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:13
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see routes/web.php:13
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:13
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:13
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see routes/web.php:17
* @route '/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:17
* @route '/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see routes/web.php:17
* @route '/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:17
* @route '/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see routes/web.php:17
* @route '/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:17
* @route '/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:17
* @route '/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \App\Http\Controllers\UserController::usuariosIndex
* @see app/Http/Controllers/UserController.php:40
* @route '/usuarios'
*/
export const usuariosIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: usuariosIndex.url(options),
    method: 'get',
})

usuariosIndex.definition = {
    methods: ["get","head"],
    url: '/usuarios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::usuariosIndex
* @see app/Http/Controllers/UserController.php:40
* @route '/usuarios'
*/
usuariosIndex.url = (options?: RouteQueryOptions) => {
    return usuariosIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::usuariosIndex
* @see app/Http/Controllers/UserController.php:40
* @route '/usuarios'
*/
usuariosIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: usuariosIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::usuariosIndex
* @see app/Http/Controllers/UserController.php:40
* @route '/usuarios'
*/
usuariosIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: usuariosIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::usuariosIndex
* @see app/Http/Controllers/UserController.php:40
* @route '/usuarios'
*/
const usuariosIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: usuariosIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::usuariosIndex
* @see app/Http/Controllers/UserController.php:40
* @route '/usuarios'
*/
usuariosIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: usuariosIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::usuariosIndex
* @see app/Http/Controllers/UserController.php:40
* @route '/usuarios'
*/
usuariosIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: usuariosIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

usuariosIndex.form = usuariosIndexForm

/**
* @see \App\Http\Controllers\UserController::usuariosStore
* @see app/Http/Controllers/UserController.php:45
* @route '/usuarios'
*/
export const usuariosStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: usuariosStore.url(options),
    method: 'post',
})

usuariosStore.definition = {
    methods: ["post"],
    url: '/usuarios',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::usuariosStore
* @see app/Http/Controllers/UserController.php:45
* @route '/usuarios'
*/
usuariosStore.url = (options?: RouteQueryOptions) => {
    return usuariosStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::usuariosStore
* @see app/Http/Controllers/UserController.php:45
* @route '/usuarios'
*/
usuariosStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: usuariosStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::usuariosStore
* @see app/Http/Controllers/UserController.php:45
* @route '/usuarios'
*/
const usuariosStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: usuariosStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::usuariosStore
* @see app/Http/Controllers/UserController.php:45
* @route '/usuarios'
*/
usuariosStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: usuariosStore.url(options),
    method: 'post',
})

usuariosStore.form = usuariosStoreForm

/**
* @see \App\Http\Controllers\UserController::usuariosUpdate
* @see app/Http/Controllers/UserController.php:115
* @route '/usuarios/{usuario}'
*/
export const usuariosUpdate = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: usuariosUpdate.url(args, options),
    method: 'put',
})

usuariosUpdate.definition = {
    methods: ["put"],
    url: '/usuarios/{usuario}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\UserController::usuariosUpdate
* @see app/Http/Controllers/UserController.php:115
* @route '/usuarios/{usuario}'
*/
usuariosUpdate.url = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { usuario: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { usuario: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            usuario: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        usuario: typeof args.usuario === 'object'
        ? args.usuario.id
        : args.usuario,
    }

    return usuariosUpdate.definition.url
            .replace('{usuario}', parsedArgs.usuario.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::usuariosUpdate
* @see app/Http/Controllers/UserController.php:115
* @route '/usuarios/{usuario}'
*/
usuariosUpdate.put = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: usuariosUpdate.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\UserController::usuariosUpdate
* @see app/Http/Controllers/UserController.php:115
* @route '/usuarios/{usuario}'
*/
const usuariosUpdateForm = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: usuariosUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::usuariosUpdate
* @see app/Http/Controllers/UserController.php:115
* @route '/usuarios/{usuario}'
*/
usuariosUpdateForm.put = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: usuariosUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

usuariosUpdate.form = usuariosUpdateForm

/**
* @see \App\Http\Controllers\UserController::usuariosDestroy
* @see app/Http/Controllers/UserController.php:101
* @route '/usuarios/{usuario}'
*/
export const usuariosDestroy = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: usuariosDestroy.url(args, options),
    method: 'delete',
})

usuariosDestroy.definition = {
    methods: ["delete"],
    url: '/usuarios/{usuario}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserController::usuariosDestroy
* @see app/Http/Controllers/UserController.php:101
* @route '/usuarios/{usuario}'
*/
usuariosDestroy.url = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { usuario: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { usuario: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            usuario: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        usuario: typeof args.usuario === 'object'
        ? args.usuario.id
        : args.usuario,
    }

    return usuariosDestroy.definition.url
            .replace('{usuario}', parsedArgs.usuario.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::usuariosDestroy
* @see app/Http/Controllers/UserController.php:101
* @route '/usuarios/{usuario}'
*/
usuariosDestroy.delete = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: usuariosDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserController::usuariosDestroy
* @see app/Http/Controllers/UserController.php:101
* @route '/usuarios/{usuario}'
*/
const usuariosDestroyForm = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: usuariosDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::usuariosDestroy
* @see app/Http/Controllers/UserController.php:101
* @route '/usuarios/{usuario}'
*/
usuariosDestroyForm.delete = (args: { usuario: number | { id: number } } | [usuario: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: usuariosDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

usuariosDestroy.form = usuariosDestroyForm

/**
* @see \App\Http\Controllers\MateriaController::materiasIndex
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
export const materiasIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: materiasIndex.url(options),
    method: 'get',
})

materiasIndex.definition = {
    methods: ["get","head"],
    url: '/materias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MateriaController::materiasIndex
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
materiasIndex.url = (options?: RouteQueryOptions) => {
    return materiasIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MateriaController::materiasIndex
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
materiasIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: materiasIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasIndex
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
materiasIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: materiasIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasIndex
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
const materiasIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: materiasIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasIndex
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
materiasIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: materiasIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasIndex
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
materiasIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: materiasIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

materiasIndex.form = materiasIndexForm

/**
* @see \App\Http\Controllers\MateriaController::materiasStore
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
export const materiasStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: materiasStore.url(options),
    method: 'post',
})

materiasStore.definition = {
    methods: ["post"],
    url: '/materias',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MateriaController::materiasStore
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
materiasStore.url = (options?: RouteQueryOptions) => {
    return materiasStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MateriaController::materiasStore
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
materiasStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: materiasStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasStore
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
const materiasStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: materiasStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasStore
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
materiasStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: materiasStore.url(options),
    method: 'post',
})

materiasStore.form = materiasStoreForm

/**
* @see \App\Http\Controllers\MateriaController::materiasUpdate
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
export const materiasUpdate = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: materiasUpdate.url(args, options),
    method: 'put',
})

materiasUpdate.definition = {
    methods: ["put"],
    url: '/materias/{materia}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MateriaController::materiasUpdate
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
materiasUpdate.url = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { materia: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { materia: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            materia: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        materia: typeof args.materia === 'object'
        ? args.materia.id
        : args.materia,
    }

    return materiasUpdate.definition.url
            .replace('{materia}', parsedArgs.materia.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MateriaController::materiasUpdate
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
materiasUpdate.put = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: materiasUpdate.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasUpdate
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
const materiasUpdateForm = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: materiasUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasUpdate
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
materiasUpdateForm.put = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: materiasUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

materiasUpdate.form = materiasUpdateForm

/**
* @see \App\Http\Controllers\MateriaController::materiasDestroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
export const materiasDestroy = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: materiasDestroy.url(args, options),
    method: 'delete',
})

materiasDestroy.definition = {
    methods: ["delete"],
    url: '/materias/{materia}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MateriaController::materiasDestroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
materiasDestroy.url = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { materia: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { materia: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            materia: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        materia: typeof args.materia === 'object'
        ? args.materia.id
        : args.materia,
    }

    return materiasDestroy.definition.url
            .replace('{materia}', parsedArgs.materia.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MateriaController::materiasDestroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
materiasDestroy.delete = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: materiasDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasDestroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
const materiasDestroyForm = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: materiasDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MateriaController::materiasDestroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
materiasDestroyForm.delete = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: materiasDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

materiasDestroy.form = materiasDestroyForm

/**
* @see \App\Http\Controllers\TurmaController::turmasIndex
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
export const turmasIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: turmasIndex.url(options),
    method: 'get',
})

turmasIndex.definition = {
    methods: ["get","head"],
    url: '/turmas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TurmaController::turmasIndex
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
turmasIndex.url = (options?: RouteQueryOptions) => {
    return turmasIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::turmasIndex
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
turmasIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: turmasIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasIndex
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
turmasIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: turmasIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasIndex
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
const turmasIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: turmasIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasIndex
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
turmasIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: turmasIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasIndex
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
turmasIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: turmasIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

turmasIndex.form = turmasIndexForm

/**
* @see \App\Http\Controllers\TurmaController::turmasStore
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
export const turmasStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: turmasStore.url(options),
    method: 'post',
})

turmasStore.definition = {
    methods: ["post"],
    url: '/turmas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TurmaController::turmasStore
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
turmasStore.url = (options?: RouteQueryOptions) => {
    return turmasStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::turmasStore
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
turmasStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: turmasStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasStore
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
const turmasStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: turmasStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasStore
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
turmasStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: turmasStore.url(options),
    method: 'post',
})

turmasStore.form = turmasStoreForm

/**
* @see \App\Http\Controllers\TurmaController::turmasShow
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
export const turmasShow = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: turmasShow.url(args, options),
    method: 'get',
})

turmasShow.definition = {
    methods: ["get","head"],
    url: '/turmas/{turma}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TurmaController::turmasShow
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
turmasShow.url = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { turma: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { turma: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            turma: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        turma: typeof args.turma === 'object'
        ? args.turma.id
        : args.turma,
    }

    return turmasShow.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::turmasShow
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
turmasShow.get = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: turmasShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasShow
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
turmasShow.head = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: turmasShow.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasShow
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
const turmasShowForm = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: turmasShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasShow
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
turmasShowForm.get = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: turmasShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasShow
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
turmasShowForm.head = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: turmasShow.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

turmasShow.form = turmasShowForm

/**
* @see \App\Http\Controllers\TurmaController::turmasUpdate
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
export const turmasUpdate = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: turmasUpdate.url(args, options),
    method: 'put',
})

turmasUpdate.definition = {
    methods: ["put"],
    url: '/turmas/{turma}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TurmaController::turmasUpdate
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
turmasUpdate.url = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { turma: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { turma: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            turma: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        turma: typeof args.turma === 'object'
        ? args.turma.id
        : args.turma,
    }

    return turmasUpdate.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::turmasUpdate
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
turmasUpdate.put = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: turmasUpdate.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasUpdate
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
const turmasUpdateForm = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: turmasUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasUpdate
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
turmasUpdateForm.put = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: turmasUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

turmasUpdate.form = turmasUpdateForm

/**
* @see \App\Http\Controllers\TurmaController::turmasDestroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
export const turmasDestroy = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: turmasDestroy.url(args, options),
    method: 'delete',
})

turmasDestroy.definition = {
    methods: ["delete"],
    url: '/turmas/{turma}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TurmaController::turmasDestroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
turmasDestroy.url = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { turma: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { turma: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            turma: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        turma: typeof args.turma === 'object'
        ? args.turma.id
        : args.turma,
    }

    return turmasDestroy.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::turmasDestroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
turmasDestroy.delete = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: turmasDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasDestroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
const turmasDestroyForm = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: turmasDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TurmaController::turmasDestroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
turmasDestroyForm.delete = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: turmasDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

turmasDestroy.form = turmasDestroyForm

/**
* @see \App\Http\Controllers\AulaController::aulasStore
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
export const aulasStore = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: aulasStore.url(args, options),
    method: 'post',
})

aulasStore.definition = {
    methods: ["post"],
    url: '/turmas/{turma}/aulas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AulaController::aulasStore
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
aulasStore.url = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { turma: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { turma: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            turma: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        turma: typeof args.turma === 'object'
        ? args.turma.id
        : args.turma,
    }

    return aulasStore.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AulaController::aulasStore
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
aulasStore.post = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: aulasStore.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AulaController::aulasStore
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
const aulasStoreForm = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: aulasStore.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AulaController::aulasStore
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
aulasStoreForm.post = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: aulasStore.url(args, options),
    method: 'post',
})

aulasStore.form = aulasStoreForm

/**
* @see \App\Http\Controllers\AulaController::aulasUpdate
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
export const aulasUpdate = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: aulasUpdate.url(args, options),
    method: 'put',
})

aulasUpdate.definition = {
    methods: ["put"],
    url: '/turmas/{turma}/aulas/{aula}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AulaController::aulasUpdate
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
aulasUpdate.url = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            turma: args[0],
            aula: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        turma: typeof args.turma === 'object'
        ? args.turma.id
        : args.turma,
        aula: args.aula,
    }

    return aulasUpdate.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace('{aula}', parsedArgs.aula.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AulaController::aulasUpdate
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
aulasUpdate.put = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: aulasUpdate.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AulaController::aulasUpdate
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
const aulasUpdateForm = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: aulasUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AulaController::aulasUpdate
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
aulasUpdateForm.put = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: aulasUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

aulasUpdate.form = aulasUpdateForm

/**
* @see \App\Http\Controllers\AulaController::aulasDestroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
export const aulasDestroy = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: aulasDestroy.url(args, options),
    method: 'delete',
})

aulasDestroy.definition = {
    methods: ["delete"],
    url: '/turmas/{turma}/aulas/{aula}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AulaController::aulasDestroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
aulasDestroy.url = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            turma: args[0],
            aula: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        turma: typeof args.turma === 'object'
        ? args.turma.id
        : args.turma,
        aula: args.aula,
    }

    return aulasDestroy.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace('{aula}', parsedArgs.aula.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AulaController::aulasDestroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
aulasDestroy.delete = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: aulasDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AulaController::aulasDestroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
const aulasDestroyForm = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: aulasDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AulaController::aulasDestroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
aulasDestroyForm.delete = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: aulasDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

aulasDestroy.form = aulasDestroyForm

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesIndex
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
export const solicitacoesIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: solicitacoesIndex.url(options),
    method: 'get',
})

solicitacoesIndex.definition = {
    methods: ["get","head"],
    url: '/solicitacoes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesIndex
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
solicitacoesIndex.url = (options?: RouteQueryOptions) => {
    return solicitacoesIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesIndex
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
solicitacoesIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: solicitacoesIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesIndex
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
solicitacoesIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: solicitacoesIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesIndex
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
const solicitacoesIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: solicitacoesIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesIndex
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
solicitacoesIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: solicitacoesIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesIndex
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
solicitacoesIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: solicitacoesIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

solicitacoesIndex.form = solicitacoesIndexForm

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesStore
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
export const solicitacoesStore = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: solicitacoesStore.url(options),
    method: 'post',
})

solicitacoesStore.definition = {
    methods: ["post"],
    url: '/solicitacoes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesStore
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
solicitacoesStore.url = (options?: RouteQueryOptions) => {
    return solicitacoesStore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesStore
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
solicitacoesStore.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: solicitacoesStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesStore
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
const solicitacoesStoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: solicitacoesStore.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesStore
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
solicitacoesStoreForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: solicitacoesStore.url(options),
    method: 'post',
})

solicitacoesStore.form = solicitacoesStoreForm

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesUpdate
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
export const solicitacoesUpdate = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: solicitacoesUpdate.url(args, options),
    method: 'put',
})

solicitacoesUpdate.definition = {
    methods: ["put"],
    url: '/solicitacoes/{solicitacao}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesUpdate
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
solicitacoesUpdate.url = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { solicitacao: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { solicitacao: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            solicitacao: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        solicitacao: typeof args.solicitacao === 'object'
        ? args.solicitacao.id
        : args.solicitacao,
    }

    return solicitacoesUpdate.definition.url
            .replace('{solicitacao}', parsedArgs.solicitacao.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesUpdate
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
solicitacoesUpdate.put = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: solicitacoesUpdate.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesUpdate
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
const solicitacoesUpdateForm = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: solicitacoesUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesUpdate
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
solicitacoesUpdateForm.put = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: solicitacoesUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

solicitacoesUpdate.form = solicitacoesUpdateForm

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesDestroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
export const solicitacoesDestroy = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: solicitacoesDestroy.url(args, options),
    method: 'delete',
})

solicitacoesDestroy.definition = {
    methods: ["delete"],
    url: '/solicitacoes/{solicitacao}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesDestroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
solicitacoesDestroy.url = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { solicitacao: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { solicitacao: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            solicitacao: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        solicitacao: typeof args.solicitacao === 'object'
        ? args.solicitacao.id
        : args.solicitacao,
    }

    return solicitacoesDestroy.definition.url
            .replace('{solicitacao}', parsedArgs.solicitacao.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesDestroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
solicitacoesDestroy.delete = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: solicitacoesDestroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesDestroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
const solicitacoesDestroyForm = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: solicitacoesDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::solicitacoesDestroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
solicitacoesDestroyForm.delete = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: solicitacoesDestroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

solicitacoesDestroy.form = solicitacoesDestroyForm

/**
* @see routes/settings.php:21
* @route '/settings/appearance'
*/
export const appearance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appearance.url(options),
    method: 'get',
})

appearance.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/settings.php:21
* @route '/settings/appearance'
*/
appearance.url = (options?: RouteQueryOptions) => {
    return appearance.definition.url + queryParams(options)
}

/**
* @see routes/settings.php:21
* @route '/settings/appearance'
*/
appearance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: appearance.url(options),
    method: 'get',
})

/**
* @see routes/settings.php:21
* @route '/settings/appearance'
*/
appearance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: appearance.url(options),
    method: 'head',
})

/**
* @see routes/settings.php:21
* @route '/settings/appearance'
*/
const appearanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appearance.url(options),
    method: 'get',
})

/**
* @see routes/settings.php:21
* @route '/settings/appearance'
*/
appearanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appearance.url(options),
    method: 'get',
})

/**
* @see routes/settings.php:21
* @route '/settings/appearance'
*/
appearanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: appearance.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

appearance.form = appearanceForm

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\RegisteredUserController::register
* @see app/Http/Controllers/Auth/RegisteredUserController.php:21
* @route '/register'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm
