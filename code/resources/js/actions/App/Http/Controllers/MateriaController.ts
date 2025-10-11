import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MateriaController::index
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/materias',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MateriaController::index
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MateriaController::index
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MateriaController::index
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MateriaController::index
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MateriaController::index
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MateriaController::index
* @see app/Http/Controllers/MateriaController.php:33
* @route '/materias'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\MateriaController::store
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/materias',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MateriaController::store
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MateriaController::store
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MateriaController::store
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MateriaController::store
* @see app/Http/Controllers/MateriaController.php:40
* @route '/materias'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\MateriaController::update
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
export const update = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/materias/{materia}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\MateriaController::update
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
update.url = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{materia}', parsedArgs.materia.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MateriaController::update
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
update.put = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MateriaController::update
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
const updateForm = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MateriaController::update
* @see app/Http/Controllers/MateriaController.php:71
* @route '/materias/{materia}'
*/
updateForm.put = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MateriaController::destroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
export const destroy = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/materias/{materia}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MateriaController::destroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
destroy.url = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{materia}', parsedArgs.materia.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MateriaController::destroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
destroy.delete = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MateriaController::destroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
const destroyForm = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MateriaController::destroy
* @see app/Http/Controllers/MateriaController.php:90
* @route '/materias/{materia}'
*/
destroyForm.delete = (args: { materia: number | { id: number } } | [materia: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const MateriaController = { index, store, update, destroy }

export default MateriaController