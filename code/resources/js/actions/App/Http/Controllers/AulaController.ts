import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AulaController::store
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
export const store = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/turmas/{turma}/aulas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AulaController::store
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
store.url = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AulaController::store
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
store.post = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AulaController::store
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
const storeForm = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AulaController::store
* @see app/Http/Controllers/AulaController.php:33
* @route '/turmas/{turma}/aulas'
*/
storeForm.post = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AulaController::update
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
export const update = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/turmas/{turma}/aulas/{aula}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AulaController::update
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
update.url = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace('{aula}', parsedArgs.aula.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AulaController::update
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
update.put = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AulaController::update
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
const updateForm = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AulaController::update
* @see app/Http/Controllers/AulaController.php:57
* @route '/turmas/{turma}/aulas/{aula}'
*/
updateForm.put = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\AulaController::destroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
export const destroy = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/turmas/{turma}/aulas/{aula}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AulaController::destroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
destroy.url = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace('{aula}', parsedArgs.aula.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AulaController::destroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
destroy.delete = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AulaController::destroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
const destroyForm = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AulaController::destroy
* @see app/Http/Controllers/AulaController.php:85
* @route '/turmas/{turma}/aulas/{aula}'
*/
destroyForm.delete = (args: { turma: number | { id: number }, aula: string | number } | [turma: number | { id: number }, aula: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const AulaController = { store, update, destroy }

export default AulaController