import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SolicitacaoController::index
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/solicitacoes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SolicitacaoController::index
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolicitacaoController::index
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::index
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::index
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::index
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::index
* @see app/Http/Controllers/SolicitacaoController.php:39
* @route '/solicitacoes'
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
* @see \App\Http\Controllers\SolicitacaoController::store
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/solicitacoes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SolicitacaoController::store
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolicitacaoController::store
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::store
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::store
* @see app/Http/Controllers/SolicitacaoController.php:45
* @route '/solicitacoes'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\SolicitacaoController::update
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
export const update = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/solicitacoes/{solicitacao}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SolicitacaoController::update
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
update.url = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{solicitacao}', parsedArgs.solicitacao.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolicitacaoController::update
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
update.put = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::update
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
const updateForm = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::update
* @see app/Http/Controllers/SolicitacaoController.php:69
* @route '/solicitacoes/{solicitacao}'
*/
updateForm.put = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\SolicitacaoController::destroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
export const destroy = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/solicitacoes/{solicitacao}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\SolicitacaoController::destroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
destroy.url = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{solicitacao}', parsedArgs.solicitacao.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SolicitacaoController::destroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
destroy.delete = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::destroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
const destroyForm = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SolicitacaoController::destroy
* @see app/Http/Controllers/SolicitacaoController.php:85
* @route '/solicitacoes/{solicitacao}'
*/
destroyForm.delete = (args: { solicitacao: number | { id: number } } | [solicitacao: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const SolicitacaoController = { index, store, update, destroy }

export default SolicitacaoController