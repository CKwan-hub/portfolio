
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model TimelineItem
 * 
 */
export type TimelineItem = $Result.DefaultSelection<Prisma.$TimelineItemPayload>
/**
 * Model ProjectEntry
 * 
 */
export type ProjectEntry = $Result.DefaultSelection<Prisma.$ProjectEntryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timelineItem`: Exposes CRUD operations for the **TimelineItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimelineItems
    * const timelineItems = await prisma.timelineItem.findMany()
    * ```
    */
  get timelineItem(): Prisma.TimelineItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectEntry`: Exposes CRUD operations for the **ProjectEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectEntries
    * const projectEntries = await prisma.projectEntry.findMany()
    * ```
    */
  get projectEntry(): Prisma.ProjectEntryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    TimelineItem: 'TimelineItem',
    ProjectEntry: 'ProjectEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "timelineItem" | "projectEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      TimelineItem: {
        payload: Prisma.$TimelineItemPayload<ExtArgs>
        fields: Prisma.TimelineItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          findFirst: {
            args: Prisma.TimelineItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          findMany: {
            args: Prisma.TimelineItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>[]
          }
          create: {
            args: Prisma.TimelineItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          createMany: {
            args: Prisma.TimelineItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimelineItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>[]
          }
          delete: {
            args: Prisma.TimelineItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          update: {
            args: Prisma.TimelineItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          deleteMany: {
            args: Prisma.TimelineItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimelineItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>[]
          }
          upsert: {
            args: Prisma.TimelineItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineItemPayload>
          }
          aggregate: {
            args: Prisma.TimelineItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimelineItem>
          }
          groupBy: {
            args: Prisma.TimelineItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineItemCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineItemCountAggregateOutputType> | number
          }
        }
      }
      ProjectEntry: {
        payload: Prisma.$ProjectEntryPayload<ExtArgs>
        fields: Prisma.ProjectEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload>
          }
          findFirst: {
            args: Prisma.ProjectEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload>
          }
          findMany: {
            args: Prisma.ProjectEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload>[]
          }
          create: {
            args: Prisma.ProjectEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload>
          }
          createMany: {
            args: Prisma.ProjectEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload>[]
          }
          delete: {
            args: Prisma.ProjectEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload>
          }
          update: {
            args: Prisma.ProjectEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload>
          }
          deleteMany: {
            args: Prisma.ProjectEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload>[]
          }
          upsert: {
            args: Prisma.ProjectEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEntryPayload>
          }
          aggregate: {
            args: Prisma.ProjectEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectEntry>
          }
          groupBy: {
            args: Prisma.ProjectEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectEntryCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    timelineItem?: TimelineItemOmit
    projectEntry?: ProjectEntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TimelineItemCountOutputType
   */

  export type TimelineItemCountOutputType = {
    projects: number
  }

  export type TimelineItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TimelineItemCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * TimelineItemCountOutputType without action
   */
  export type TimelineItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItemCountOutputType
     */
    select?: TimelineItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimelineItemCountOutputType without action
   */
  export type TimelineItemCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    category: string | null
    year: string | null
    featured: boolean | null
    demoUrl: string | null
    githubUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    category: string | null
    year: string | null
    featured: boolean | null
    demoUrl: string | null
    githubUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    category: number
    technologies: number
    year: number
    featured: number
    demoUrl: number
    githubUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    category?: true
    year?: true
    featured?: true
    demoUrl?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    category?: true
    year?: true
    featured?: true
    demoUrl?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    category?: true
    technologies?: true
    year?: true
    featured?: true
    demoUrl?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string
    image: string | null
    category: string
    technologies: string[]
    year: string
    featured: boolean
    demoUrl: string | null
    githubUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    technologies?: boolean
    year?: boolean
    featured?: boolean
    demoUrl?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    technologies?: boolean
    year?: boolean
    featured?: boolean
    demoUrl?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    technologies?: boolean
    year?: boolean
    featured?: boolean
    demoUrl?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    technologies?: boolean
    year?: boolean
    featured?: boolean
    demoUrl?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "category" | "technologies" | "year" | "featured" | "demoUrl" | "githubUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      image: string | null
      category: string
      technologies: string[]
      year: string
      featured: boolean
      demoUrl: string | null
      githubUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly image: FieldRef<"Project", 'String'>
    readonly category: FieldRef<"Project", 'String'>
    readonly technologies: FieldRef<"Project", 'String[]'>
    readonly year: FieldRef<"Project", 'String'>
    readonly featured: FieldRef<"Project", 'Boolean'>
    readonly demoUrl: FieldRef<"Project", 'String'>
    readonly githubUrl: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
  }


  /**
   * Model TimelineItem
   */

  export type AggregateTimelineItem = {
    _count: TimelineItemCountAggregateOutputType | null
    _min: TimelineItemMinAggregateOutputType | null
    _max: TimelineItemMaxAggregateOutputType | null
  }

  export type TimelineItemMinAggregateOutputType = {
    id: string | null
    company: string | null
    role: string | null
    period: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimelineItemMaxAggregateOutputType = {
    id: string | null
    company: string | null
    role: string | null
    period: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimelineItemCountAggregateOutputType = {
    id: number
    company: number
    role: number
    period: number
    description: number
    categories: number
    technologies: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimelineItemMinAggregateInputType = {
    id?: true
    company?: true
    role?: true
    period?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimelineItemMaxAggregateInputType = {
    id?: true
    company?: true
    role?: true
    period?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimelineItemCountAggregateInputType = {
    id?: true
    company?: true
    role?: true
    period?: true
    description?: true
    categories?: true
    technologies?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimelineItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineItem to aggregate.
     */
    where?: TimelineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineItems to fetch.
     */
    orderBy?: TimelineItemOrderByWithRelationInput | TimelineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimelineItems
    **/
    _count?: true | TimelineItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineItemMaxAggregateInputType
  }

  export type GetTimelineItemAggregateType<T extends TimelineItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTimelineItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimelineItem[P]>
      : GetScalarType<T[P], AggregateTimelineItem[P]>
  }




  export type TimelineItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineItemWhereInput
    orderBy?: TimelineItemOrderByWithAggregationInput | TimelineItemOrderByWithAggregationInput[]
    by: TimelineItemScalarFieldEnum[] | TimelineItemScalarFieldEnum
    having?: TimelineItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineItemCountAggregateInputType | true
    _min?: TimelineItemMinAggregateInputType
    _max?: TimelineItemMaxAggregateInputType
  }

  export type TimelineItemGroupByOutputType = {
    id: string
    company: string
    role: string
    period: string
    description: string
    categories: string[]
    technologies: string[]
    createdAt: Date
    updatedAt: Date
    _count: TimelineItemCountAggregateOutputType | null
    _min: TimelineItemMinAggregateOutputType | null
    _max: TimelineItemMaxAggregateOutputType | null
  }

  type GetTimelineItemGroupByPayload<T extends TimelineItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineItemGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineItemGroupByOutputType[P]>
        }
      >
    >


  export type TimelineItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    role?: boolean
    period?: boolean
    description?: boolean
    categories?: boolean
    technologies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | TimelineItem$projectsArgs<ExtArgs>
    _count?: boolean | TimelineItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineItem"]>

  export type TimelineItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    role?: boolean
    period?: boolean
    description?: boolean
    categories?: boolean
    technologies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["timelineItem"]>

  export type TimelineItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    role?: boolean
    period?: boolean
    description?: boolean
    categories?: boolean
    technologies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["timelineItem"]>

  export type TimelineItemSelectScalar = {
    id?: boolean
    company?: boolean
    role?: boolean
    period?: boolean
    description?: boolean
    categories?: boolean
    technologies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimelineItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "role" | "period" | "description" | "categories" | "technologies" | "createdAt" | "updatedAt", ExtArgs["result"]["timelineItem"]>
  export type TimelineItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TimelineItem$projectsArgs<ExtArgs>
    _count?: boolean | TimelineItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimelineItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TimelineItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TimelineItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimelineItem"
    objects: {
      projects: Prisma.$ProjectEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      role: string
      period: string
      description: string
      categories: string[]
      technologies: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timelineItem"]>
    composites: {}
  }

  type TimelineItemGetPayload<S extends boolean | null | undefined | TimelineItemDefaultArgs> = $Result.GetResult<Prisma.$TimelineItemPayload, S>

  type TimelineItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimelineItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimelineItemCountAggregateInputType | true
    }

  export interface TimelineItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimelineItem'], meta: { name: 'TimelineItem' } }
    /**
     * Find zero or one TimelineItem that matches the filter.
     * @param {TimelineItemFindUniqueArgs} args - Arguments to find a TimelineItem
     * @example
     * // Get one TimelineItem
     * const timelineItem = await prisma.timelineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineItemFindUniqueArgs>(args: SelectSubset<T, TimelineItemFindUniqueArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimelineItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimelineItemFindUniqueOrThrowArgs} args - Arguments to find a TimelineItem
     * @example
     * // Get one TimelineItem
     * const timelineItem = await prisma.timelineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimelineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemFindFirstArgs} args - Arguments to find a TimelineItem
     * @example
     * // Get one TimelineItem
     * const timelineItem = await prisma.timelineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineItemFindFirstArgs>(args?: SelectSubset<T, TimelineItemFindFirstArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimelineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemFindFirstOrThrowArgs} args - Arguments to find a TimelineItem
     * @example
     * // Get one TimelineItem
     * const timelineItem = await prisma.timelineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimelineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimelineItems
     * const timelineItems = await prisma.timelineItem.findMany()
     * 
     * // Get first 10 TimelineItems
     * const timelineItems = await prisma.timelineItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineItemWithIdOnly = await prisma.timelineItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineItemFindManyArgs>(args?: SelectSubset<T, TimelineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimelineItem.
     * @param {TimelineItemCreateArgs} args - Arguments to create a TimelineItem.
     * @example
     * // Create one TimelineItem
     * const TimelineItem = await prisma.timelineItem.create({
     *   data: {
     *     // ... data to create a TimelineItem
     *   }
     * })
     * 
     */
    create<T extends TimelineItemCreateArgs>(args: SelectSubset<T, TimelineItemCreateArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimelineItems.
     * @param {TimelineItemCreateManyArgs} args - Arguments to create many TimelineItems.
     * @example
     * // Create many TimelineItems
     * const timelineItem = await prisma.timelineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineItemCreateManyArgs>(args?: SelectSubset<T, TimelineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimelineItems and returns the data saved in the database.
     * @param {TimelineItemCreateManyAndReturnArgs} args - Arguments to create many TimelineItems.
     * @example
     * // Create many TimelineItems
     * const timelineItem = await prisma.timelineItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimelineItems and only return the `id`
     * const timelineItemWithIdOnly = await prisma.timelineItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimelineItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TimelineItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimelineItem.
     * @param {TimelineItemDeleteArgs} args - Arguments to delete one TimelineItem.
     * @example
     * // Delete one TimelineItem
     * const TimelineItem = await prisma.timelineItem.delete({
     *   where: {
     *     // ... filter to delete one TimelineItem
     *   }
     * })
     * 
     */
    delete<T extends TimelineItemDeleteArgs>(args: SelectSubset<T, TimelineItemDeleteArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimelineItem.
     * @param {TimelineItemUpdateArgs} args - Arguments to update one TimelineItem.
     * @example
     * // Update one TimelineItem
     * const timelineItem = await prisma.timelineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineItemUpdateArgs>(args: SelectSubset<T, TimelineItemUpdateArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimelineItems.
     * @param {TimelineItemDeleteManyArgs} args - Arguments to filter TimelineItems to delete.
     * @example
     * // Delete a few TimelineItems
     * const { count } = await prisma.timelineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineItemDeleteManyArgs>(args?: SelectSubset<T, TimelineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimelineItems
     * const timelineItem = await prisma.timelineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineItemUpdateManyArgs>(args: SelectSubset<T, TimelineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineItems and returns the data updated in the database.
     * @param {TimelineItemUpdateManyAndReturnArgs} args - Arguments to update many TimelineItems.
     * @example
     * // Update many TimelineItems
     * const timelineItem = await prisma.timelineItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimelineItems and only return the `id`
     * const timelineItemWithIdOnly = await prisma.timelineItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimelineItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TimelineItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimelineItem.
     * @param {TimelineItemUpsertArgs} args - Arguments to update or create a TimelineItem.
     * @example
     * // Update or create a TimelineItem
     * const timelineItem = await prisma.timelineItem.upsert({
     *   create: {
     *     // ... data to create a TimelineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimelineItem we want to update
     *   }
     * })
     */
    upsert<T extends TimelineItemUpsertArgs>(args: SelectSubset<T, TimelineItemUpsertArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimelineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemCountArgs} args - Arguments to filter TimelineItems to count.
     * @example
     * // Count the number of TimelineItems
     * const count = await prisma.timelineItem.count({
     *   where: {
     *     // ... the filter for the TimelineItems we want to count
     *   }
     * })
    **/
    count<T extends TimelineItemCountArgs>(
      args?: Subset<T, TimelineItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimelineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimelineItemAggregateArgs>(args: Subset<T, TimelineItemAggregateArgs>): Prisma.PrismaPromise<GetTimelineItemAggregateType<T>>

    /**
     * Group by TimelineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimelineItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineItemGroupByArgs['orderBy'] }
        : { orderBy?: TimelineItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimelineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimelineItem model
   */
  readonly fields: TimelineItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimelineItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends TimelineItem$projectsArgs<ExtArgs> = {}>(args?: Subset<T, TimelineItem$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimelineItem model
   */
  interface TimelineItemFieldRefs {
    readonly id: FieldRef<"TimelineItem", 'String'>
    readonly company: FieldRef<"TimelineItem", 'String'>
    readonly role: FieldRef<"TimelineItem", 'String'>
    readonly period: FieldRef<"TimelineItem", 'String'>
    readonly description: FieldRef<"TimelineItem", 'String'>
    readonly categories: FieldRef<"TimelineItem", 'String[]'>
    readonly technologies: FieldRef<"TimelineItem", 'String[]'>
    readonly createdAt: FieldRef<"TimelineItem", 'DateTime'>
    readonly updatedAt: FieldRef<"TimelineItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimelineItem findUnique
   */
  export type TimelineItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItem to fetch.
     */
    where: TimelineItemWhereUniqueInput
  }

  /**
   * TimelineItem findUniqueOrThrow
   */
  export type TimelineItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItem to fetch.
     */
    where: TimelineItemWhereUniqueInput
  }

  /**
   * TimelineItem findFirst
   */
  export type TimelineItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItem to fetch.
     */
    where?: TimelineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineItems to fetch.
     */
    orderBy?: TimelineItemOrderByWithRelationInput | TimelineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineItems.
     */
    cursor?: TimelineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineItems.
     */
    distinct?: TimelineItemScalarFieldEnum | TimelineItemScalarFieldEnum[]
  }

  /**
   * TimelineItem findFirstOrThrow
   */
  export type TimelineItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItem to fetch.
     */
    where?: TimelineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineItems to fetch.
     */
    orderBy?: TimelineItemOrderByWithRelationInput | TimelineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineItems.
     */
    cursor?: TimelineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineItems.
     */
    distinct?: TimelineItemScalarFieldEnum | TimelineItemScalarFieldEnum[]
  }

  /**
   * TimelineItem findMany
   */
  export type TimelineItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter, which TimelineItems to fetch.
     */
    where?: TimelineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineItems to fetch.
     */
    orderBy?: TimelineItemOrderByWithRelationInput | TimelineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimelineItems.
     */
    cursor?: TimelineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineItems.
     */
    skip?: number
    distinct?: TimelineItemScalarFieldEnum | TimelineItemScalarFieldEnum[]
  }

  /**
   * TimelineItem create
   */
  export type TimelineItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TimelineItem.
     */
    data: XOR<TimelineItemCreateInput, TimelineItemUncheckedCreateInput>
  }

  /**
   * TimelineItem createMany
   */
  export type TimelineItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimelineItems.
     */
    data: TimelineItemCreateManyInput | TimelineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimelineItem createManyAndReturn
   */
  export type TimelineItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * The data used to create many TimelineItems.
     */
    data: TimelineItemCreateManyInput | TimelineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimelineItem update
   */
  export type TimelineItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TimelineItem.
     */
    data: XOR<TimelineItemUpdateInput, TimelineItemUncheckedUpdateInput>
    /**
     * Choose, which TimelineItem to update.
     */
    where: TimelineItemWhereUniqueInput
  }

  /**
   * TimelineItem updateMany
   */
  export type TimelineItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimelineItems.
     */
    data: XOR<TimelineItemUpdateManyMutationInput, TimelineItemUncheckedUpdateManyInput>
    /**
     * Filter which TimelineItems to update
     */
    where?: TimelineItemWhereInput
    /**
     * Limit how many TimelineItems to update.
     */
    limit?: number
  }

  /**
   * TimelineItem updateManyAndReturn
   */
  export type TimelineItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * The data used to update TimelineItems.
     */
    data: XOR<TimelineItemUpdateManyMutationInput, TimelineItemUncheckedUpdateManyInput>
    /**
     * Filter which TimelineItems to update
     */
    where?: TimelineItemWhereInput
    /**
     * Limit how many TimelineItems to update.
     */
    limit?: number
  }

  /**
   * TimelineItem upsert
   */
  export type TimelineItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TimelineItem to update in case it exists.
     */
    where: TimelineItemWhereUniqueInput
    /**
     * In case the TimelineItem found by the `where` argument doesn't exist, create a new TimelineItem with this data.
     */
    create: XOR<TimelineItemCreateInput, TimelineItemUncheckedCreateInput>
    /**
     * In case the TimelineItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineItemUpdateInput, TimelineItemUncheckedUpdateInput>
  }

  /**
   * TimelineItem delete
   */
  export type TimelineItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
    /**
     * Filter which TimelineItem to delete.
     */
    where: TimelineItemWhereUniqueInput
  }

  /**
   * TimelineItem deleteMany
   */
  export type TimelineItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineItems to delete
     */
    where?: TimelineItemWhereInput
    /**
     * Limit how many TimelineItems to delete.
     */
    limit?: number
  }

  /**
   * TimelineItem.projects
   */
  export type TimelineItem$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    where?: ProjectEntryWhereInput
    orderBy?: ProjectEntryOrderByWithRelationInput | ProjectEntryOrderByWithRelationInput[]
    cursor?: ProjectEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEntryScalarFieldEnum | ProjectEntryScalarFieldEnum[]
  }

  /**
   * TimelineItem without action
   */
  export type TimelineItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineItem
     */
    select?: TimelineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimelineItem
     */
    omit?: TimelineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineItemInclude<ExtArgs> | null
  }


  /**
   * Model ProjectEntry
   */

  export type AggregateProjectEntry = {
    _count: ProjectEntryCountAggregateOutputType | null
    _min: ProjectEntryMinAggregateOutputType | null
    _max: ProjectEntryMaxAggregateOutputType | null
  }

  export type ProjectEntryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    timelineItemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectEntryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    timelineItemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectEntryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    timelineItemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectEntryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    timelineItemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectEntryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    timelineItemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectEntryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    timelineItemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEntry to aggregate.
     */
    where?: ProjectEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEntries to fetch.
     */
    orderBy?: ProjectEntryOrderByWithRelationInput | ProjectEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectEntries
    **/
    _count?: true | ProjectEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectEntryMaxAggregateInputType
  }

  export type GetProjectEntryAggregateType<T extends ProjectEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectEntry[P]>
      : GetScalarType<T[P], AggregateProjectEntry[P]>
  }




  export type ProjectEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEntryWhereInput
    orderBy?: ProjectEntryOrderByWithAggregationInput | ProjectEntryOrderByWithAggregationInput[]
    by: ProjectEntryScalarFieldEnum[] | ProjectEntryScalarFieldEnum
    having?: ProjectEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectEntryCountAggregateInputType | true
    _min?: ProjectEntryMinAggregateInputType
    _max?: ProjectEntryMaxAggregateInputType
  }

  export type ProjectEntryGroupByOutputType = {
    id: string
    name: string
    description: string
    timelineItemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectEntryCountAggregateOutputType | null
    _min: ProjectEntryMinAggregateOutputType | null
    _max: ProjectEntryMaxAggregateOutputType | null
  }

  type GetProjectEntryGroupByPayload<T extends ProjectEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectEntryGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectEntryGroupByOutputType[P]>
        }
      >
    >


  export type ProjectEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    timelineItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timelineItem?: boolean | TimelineItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEntry"]>

  export type ProjectEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    timelineItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timelineItem?: boolean | TimelineItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEntry"]>

  export type ProjectEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    timelineItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timelineItem?: boolean | TimelineItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEntry"]>

  export type ProjectEntrySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    timelineItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "timelineItemId" | "createdAt" | "updatedAt", ExtArgs["result"]["projectEntry"]>
  export type ProjectEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timelineItem?: boolean | TimelineItemDefaultArgs<ExtArgs>
  }
  export type ProjectEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timelineItem?: boolean | TimelineItemDefaultArgs<ExtArgs>
  }
  export type ProjectEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timelineItem?: boolean | TimelineItemDefaultArgs<ExtArgs>
  }

  export type $ProjectEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectEntry"
    objects: {
      timelineItem: Prisma.$TimelineItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      timelineItemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectEntry"]>
    composites: {}
  }

  type ProjectEntryGetPayload<S extends boolean | null | undefined | ProjectEntryDefaultArgs> = $Result.GetResult<Prisma.$ProjectEntryPayload, S>

  type ProjectEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectEntryCountAggregateInputType | true
    }

  export interface ProjectEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectEntry'], meta: { name: 'ProjectEntry' } }
    /**
     * Find zero or one ProjectEntry that matches the filter.
     * @param {ProjectEntryFindUniqueArgs} args - Arguments to find a ProjectEntry
     * @example
     * // Get one ProjectEntry
     * const projectEntry = await prisma.projectEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectEntryFindUniqueArgs>(args: SelectSubset<T, ProjectEntryFindUniqueArgs<ExtArgs>>): Prisma__ProjectEntryClient<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectEntryFindUniqueOrThrowArgs} args - Arguments to find a ProjectEntry
     * @example
     * // Get one ProjectEntry
     * const projectEntry = await prisma.projectEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectEntryClient<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEntryFindFirstArgs} args - Arguments to find a ProjectEntry
     * @example
     * // Get one ProjectEntry
     * const projectEntry = await prisma.projectEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectEntryFindFirstArgs>(args?: SelectSubset<T, ProjectEntryFindFirstArgs<ExtArgs>>): Prisma__ProjectEntryClient<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEntryFindFirstOrThrowArgs} args - Arguments to find a ProjectEntry
     * @example
     * // Get one ProjectEntry
     * const projectEntry = await prisma.projectEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectEntryClient<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectEntries
     * const projectEntries = await prisma.projectEntry.findMany()
     * 
     * // Get first 10 ProjectEntries
     * const projectEntries = await prisma.projectEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectEntryWithIdOnly = await prisma.projectEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectEntryFindManyArgs>(args?: SelectSubset<T, ProjectEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectEntry.
     * @param {ProjectEntryCreateArgs} args - Arguments to create a ProjectEntry.
     * @example
     * // Create one ProjectEntry
     * const ProjectEntry = await prisma.projectEntry.create({
     *   data: {
     *     // ... data to create a ProjectEntry
     *   }
     * })
     * 
     */
    create<T extends ProjectEntryCreateArgs>(args: SelectSubset<T, ProjectEntryCreateArgs<ExtArgs>>): Prisma__ProjectEntryClient<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectEntries.
     * @param {ProjectEntryCreateManyArgs} args - Arguments to create many ProjectEntries.
     * @example
     * // Create many ProjectEntries
     * const projectEntry = await prisma.projectEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectEntryCreateManyArgs>(args?: SelectSubset<T, ProjectEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectEntries and returns the data saved in the database.
     * @param {ProjectEntryCreateManyAndReturnArgs} args - Arguments to create many ProjectEntries.
     * @example
     * // Create many ProjectEntries
     * const projectEntry = await prisma.projectEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectEntries and only return the `id`
     * const projectEntryWithIdOnly = await prisma.projectEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectEntry.
     * @param {ProjectEntryDeleteArgs} args - Arguments to delete one ProjectEntry.
     * @example
     * // Delete one ProjectEntry
     * const ProjectEntry = await prisma.projectEntry.delete({
     *   where: {
     *     // ... filter to delete one ProjectEntry
     *   }
     * })
     * 
     */
    delete<T extends ProjectEntryDeleteArgs>(args: SelectSubset<T, ProjectEntryDeleteArgs<ExtArgs>>): Prisma__ProjectEntryClient<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectEntry.
     * @param {ProjectEntryUpdateArgs} args - Arguments to update one ProjectEntry.
     * @example
     * // Update one ProjectEntry
     * const projectEntry = await prisma.projectEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectEntryUpdateArgs>(args: SelectSubset<T, ProjectEntryUpdateArgs<ExtArgs>>): Prisma__ProjectEntryClient<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectEntries.
     * @param {ProjectEntryDeleteManyArgs} args - Arguments to filter ProjectEntries to delete.
     * @example
     * // Delete a few ProjectEntries
     * const { count } = await prisma.projectEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectEntryDeleteManyArgs>(args?: SelectSubset<T, ProjectEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectEntries
     * const projectEntry = await prisma.projectEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectEntryUpdateManyArgs>(args: SelectSubset<T, ProjectEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectEntries and returns the data updated in the database.
     * @param {ProjectEntryUpdateManyAndReturnArgs} args - Arguments to update many ProjectEntries.
     * @example
     * // Update many ProjectEntries
     * const projectEntry = await prisma.projectEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectEntries and only return the `id`
     * const projectEntryWithIdOnly = await prisma.projectEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectEntry.
     * @param {ProjectEntryUpsertArgs} args - Arguments to update or create a ProjectEntry.
     * @example
     * // Update or create a ProjectEntry
     * const projectEntry = await prisma.projectEntry.upsert({
     *   create: {
     *     // ... data to create a ProjectEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectEntry we want to update
     *   }
     * })
     */
    upsert<T extends ProjectEntryUpsertArgs>(args: SelectSubset<T, ProjectEntryUpsertArgs<ExtArgs>>): Prisma__ProjectEntryClient<$Result.GetResult<Prisma.$ProjectEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEntryCountArgs} args - Arguments to filter ProjectEntries to count.
     * @example
     * // Count the number of ProjectEntries
     * const count = await prisma.projectEntry.count({
     *   where: {
     *     // ... the filter for the ProjectEntries we want to count
     *   }
     * })
    **/
    count<T extends ProjectEntryCountArgs>(
      args?: Subset<T, ProjectEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectEntryAggregateArgs>(args: Subset<T, ProjectEntryAggregateArgs>): Prisma.PrismaPromise<GetProjectEntryAggregateType<T>>

    /**
     * Group by ProjectEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectEntryGroupByArgs['orderBy'] }
        : { orderBy?: ProjectEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectEntry model
   */
  readonly fields: ProjectEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timelineItem<T extends TimelineItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimelineItemDefaultArgs<ExtArgs>>): Prisma__TimelineItemClient<$Result.GetResult<Prisma.$TimelineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectEntry model
   */
  interface ProjectEntryFieldRefs {
    readonly id: FieldRef<"ProjectEntry", 'String'>
    readonly name: FieldRef<"ProjectEntry", 'String'>
    readonly description: FieldRef<"ProjectEntry", 'String'>
    readonly timelineItemId: FieldRef<"ProjectEntry", 'String'>
    readonly createdAt: FieldRef<"ProjectEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectEntry findUnique
   */
  export type ProjectEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEntry to fetch.
     */
    where: ProjectEntryWhereUniqueInput
  }

  /**
   * ProjectEntry findUniqueOrThrow
   */
  export type ProjectEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEntry to fetch.
     */
    where: ProjectEntryWhereUniqueInput
  }

  /**
   * ProjectEntry findFirst
   */
  export type ProjectEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEntry to fetch.
     */
    where?: ProjectEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEntries to fetch.
     */
    orderBy?: ProjectEntryOrderByWithRelationInput | ProjectEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEntries.
     */
    cursor?: ProjectEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEntries.
     */
    distinct?: ProjectEntryScalarFieldEnum | ProjectEntryScalarFieldEnum[]
  }

  /**
   * ProjectEntry findFirstOrThrow
   */
  export type ProjectEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEntry to fetch.
     */
    where?: ProjectEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEntries to fetch.
     */
    orderBy?: ProjectEntryOrderByWithRelationInput | ProjectEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEntries.
     */
    cursor?: ProjectEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEntries.
     */
    distinct?: ProjectEntryScalarFieldEnum | ProjectEntryScalarFieldEnum[]
  }

  /**
   * ProjectEntry findMany
   */
  export type ProjectEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEntries to fetch.
     */
    where?: ProjectEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEntries to fetch.
     */
    orderBy?: ProjectEntryOrderByWithRelationInput | ProjectEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectEntries.
     */
    cursor?: ProjectEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEntries.
     */
    skip?: number
    distinct?: ProjectEntryScalarFieldEnum | ProjectEntryScalarFieldEnum[]
  }

  /**
   * ProjectEntry create
   */
  export type ProjectEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectEntry.
     */
    data: XOR<ProjectEntryCreateInput, ProjectEntryUncheckedCreateInput>
  }

  /**
   * ProjectEntry createMany
   */
  export type ProjectEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectEntries.
     */
    data: ProjectEntryCreateManyInput | ProjectEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectEntry createManyAndReturn
   */
  export type ProjectEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectEntries.
     */
    data: ProjectEntryCreateManyInput | ProjectEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectEntry update
   */
  export type ProjectEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectEntry.
     */
    data: XOR<ProjectEntryUpdateInput, ProjectEntryUncheckedUpdateInput>
    /**
     * Choose, which ProjectEntry to update.
     */
    where: ProjectEntryWhereUniqueInput
  }

  /**
   * ProjectEntry updateMany
   */
  export type ProjectEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectEntries.
     */
    data: XOR<ProjectEntryUpdateManyMutationInput, ProjectEntryUncheckedUpdateManyInput>
    /**
     * Filter which ProjectEntries to update
     */
    where?: ProjectEntryWhereInput
    /**
     * Limit how many ProjectEntries to update.
     */
    limit?: number
  }

  /**
   * ProjectEntry updateManyAndReturn
   */
  export type ProjectEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * The data used to update ProjectEntries.
     */
    data: XOR<ProjectEntryUpdateManyMutationInput, ProjectEntryUncheckedUpdateManyInput>
    /**
     * Filter which ProjectEntries to update
     */
    where?: ProjectEntryWhereInput
    /**
     * Limit how many ProjectEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectEntry upsert
   */
  export type ProjectEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectEntry to update in case it exists.
     */
    where: ProjectEntryWhereUniqueInput
    /**
     * In case the ProjectEntry found by the `where` argument doesn't exist, create a new ProjectEntry with this data.
     */
    create: XOR<ProjectEntryCreateInput, ProjectEntryUncheckedCreateInput>
    /**
     * In case the ProjectEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectEntryUpdateInput, ProjectEntryUncheckedUpdateInput>
  }

  /**
   * ProjectEntry delete
   */
  export type ProjectEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
    /**
     * Filter which ProjectEntry to delete.
     */
    where: ProjectEntryWhereUniqueInput
  }

  /**
   * ProjectEntry deleteMany
   */
  export type ProjectEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEntries to delete
     */
    where?: ProjectEntryWhereInput
    /**
     * Limit how many ProjectEntries to delete.
     */
    limit?: number
  }

  /**
   * ProjectEntry without action
   */
  export type ProjectEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEntry
     */
    select?: ProjectEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEntry
     */
    omit?: ProjectEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEntryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    category: 'category',
    technologies: 'technologies',
    year: 'year',
    featured: 'featured',
    demoUrl: 'demoUrl',
    githubUrl: 'githubUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TimelineItemScalarFieldEnum: {
    id: 'id',
    company: 'company',
    role: 'role',
    period: 'period',
    description: 'description',
    categories: 'categories',
    technologies: 'technologies',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimelineItemScalarFieldEnum = (typeof TimelineItemScalarFieldEnum)[keyof typeof TimelineItemScalarFieldEnum]


  export const ProjectEntryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    timelineItemId: 'timelineItemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectEntryScalarFieldEnum = (typeof ProjectEntryScalarFieldEnum)[keyof typeof ProjectEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    image?: StringNullableFilter<"Project"> | string | null
    category?: StringFilter<"Project"> | string
    technologies?: StringNullableListFilter<"Project">
    year?: StringFilter<"Project"> | string
    featured?: BoolFilter<"Project"> | boolean
    demoUrl?: StringNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    technologies?: SortOrder
    year?: SortOrder
    featured?: SortOrder
    demoUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    image?: StringNullableFilter<"Project"> | string | null
    category?: StringFilter<"Project"> | string
    technologies?: StringNullableListFilter<"Project">
    year?: StringFilter<"Project"> | string
    featured?: BoolFilter<"Project"> | boolean
    demoUrl?: StringNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    technologies?: SortOrder
    year?: SortOrder
    featured?: SortOrder
    demoUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    image?: StringNullableWithAggregatesFilter<"Project"> | string | null
    category?: StringWithAggregatesFilter<"Project"> | string
    technologies?: StringNullableListFilter<"Project">
    year?: StringWithAggregatesFilter<"Project"> | string
    featured?: BoolWithAggregatesFilter<"Project"> | boolean
    demoUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type TimelineItemWhereInput = {
    AND?: TimelineItemWhereInput | TimelineItemWhereInput[]
    OR?: TimelineItemWhereInput[]
    NOT?: TimelineItemWhereInput | TimelineItemWhereInput[]
    id?: StringFilter<"TimelineItem"> | string
    company?: StringFilter<"TimelineItem"> | string
    role?: StringFilter<"TimelineItem"> | string
    period?: StringFilter<"TimelineItem"> | string
    description?: StringFilter<"TimelineItem"> | string
    categories?: StringNullableListFilter<"TimelineItem">
    technologies?: StringNullableListFilter<"TimelineItem">
    createdAt?: DateTimeFilter<"TimelineItem"> | Date | string
    updatedAt?: DateTimeFilter<"TimelineItem"> | Date | string
    projects?: ProjectEntryListRelationFilter
  }

  export type TimelineItemOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    period?: SortOrder
    description?: SortOrder
    categories?: SortOrder
    technologies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectEntryOrderByRelationAggregateInput
  }

  export type TimelineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimelineItemWhereInput | TimelineItemWhereInput[]
    OR?: TimelineItemWhereInput[]
    NOT?: TimelineItemWhereInput | TimelineItemWhereInput[]
    company?: StringFilter<"TimelineItem"> | string
    role?: StringFilter<"TimelineItem"> | string
    period?: StringFilter<"TimelineItem"> | string
    description?: StringFilter<"TimelineItem"> | string
    categories?: StringNullableListFilter<"TimelineItem">
    technologies?: StringNullableListFilter<"TimelineItem">
    createdAt?: DateTimeFilter<"TimelineItem"> | Date | string
    updatedAt?: DateTimeFilter<"TimelineItem"> | Date | string
    projects?: ProjectEntryListRelationFilter
  }, "id">

  export type TimelineItemOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    period?: SortOrder
    description?: SortOrder
    categories?: SortOrder
    technologies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimelineItemCountOrderByAggregateInput
    _max?: TimelineItemMaxOrderByAggregateInput
    _min?: TimelineItemMinOrderByAggregateInput
  }

  export type TimelineItemScalarWhereWithAggregatesInput = {
    AND?: TimelineItemScalarWhereWithAggregatesInput | TimelineItemScalarWhereWithAggregatesInput[]
    OR?: TimelineItemScalarWhereWithAggregatesInput[]
    NOT?: TimelineItemScalarWhereWithAggregatesInput | TimelineItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimelineItem"> | string
    company?: StringWithAggregatesFilter<"TimelineItem"> | string
    role?: StringWithAggregatesFilter<"TimelineItem"> | string
    period?: StringWithAggregatesFilter<"TimelineItem"> | string
    description?: StringWithAggregatesFilter<"TimelineItem"> | string
    categories?: StringNullableListFilter<"TimelineItem">
    technologies?: StringNullableListFilter<"TimelineItem">
    createdAt?: DateTimeWithAggregatesFilter<"TimelineItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimelineItem"> | Date | string
  }

  export type ProjectEntryWhereInput = {
    AND?: ProjectEntryWhereInput | ProjectEntryWhereInput[]
    OR?: ProjectEntryWhereInput[]
    NOT?: ProjectEntryWhereInput | ProjectEntryWhereInput[]
    id?: StringFilter<"ProjectEntry"> | string
    name?: StringFilter<"ProjectEntry"> | string
    description?: StringFilter<"ProjectEntry"> | string
    timelineItemId?: StringFilter<"ProjectEntry"> | string
    createdAt?: DateTimeFilter<"ProjectEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectEntry"> | Date | string
    timelineItem?: XOR<TimelineItemScalarRelationFilter, TimelineItemWhereInput>
  }

  export type ProjectEntryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    timelineItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timelineItem?: TimelineItemOrderByWithRelationInput
  }

  export type ProjectEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectEntryWhereInput | ProjectEntryWhereInput[]
    OR?: ProjectEntryWhereInput[]
    NOT?: ProjectEntryWhereInput | ProjectEntryWhereInput[]
    name?: StringFilter<"ProjectEntry"> | string
    description?: StringFilter<"ProjectEntry"> | string
    timelineItemId?: StringFilter<"ProjectEntry"> | string
    createdAt?: DateTimeFilter<"ProjectEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectEntry"> | Date | string
    timelineItem?: XOR<TimelineItemScalarRelationFilter, TimelineItemWhereInput>
  }, "id">

  export type ProjectEntryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    timelineItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectEntryCountOrderByAggregateInput
    _max?: ProjectEntryMaxOrderByAggregateInput
    _min?: ProjectEntryMinOrderByAggregateInput
  }

  export type ProjectEntryScalarWhereWithAggregatesInput = {
    AND?: ProjectEntryScalarWhereWithAggregatesInput | ProjectEntryScalarWhereWithAggregatesInput[]
    OR?: ProjectEntryScalarWhereWithAggregatesInput[]
    NOT?: ProjectEntryScalarWhereWithAggregatesInput | ProjectEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectEntry"> | string
    name?: StringWithAggregatesFilter<"ProjectEntry"> | string
    description?: StringWithAggregatesFilter<"ProjectEntry"> | string
    timelineItemId?: StringWithAggregatesFilter<"ProjectEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectEntry"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    category: string
    technologies?: ProjectCreatetechnologiesInput | string[]
    year: string
    featured?: boolean
    demoUrl?: string | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    category: string
    technologies?: ProjectCreatetechnologiesInput | string[]
    year: string
    featured?: boolean
    demoUrl?: string | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    technologies?: ProjectUpdatetechnologiesInput | string[]
    year?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    technologies?: ProjectUpdatetechnologiesInput | string[]
    year?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description: string
    image?: string | null
    category: string
    technologies?: ProjectCreatetechnologiesInput | string[]
    year: string
    featured?: boolean
    demoUrl?: string | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    technologies?: ProjectUpdatetechnologiesInput | string[]
    year?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    technologies?: ProjectUpdatetechnologiesInput | string[]
    year?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineItemCreateInput = {
    id?: string
    company: string
    role: string
    period: string
    description: string
    categories?: TimelineItemCreatecategoriesInput | string[]
    technologies?: TimelineItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectEntryCreateNestedManyWithoutTimelineItemInput
  }

  export type TimelineItemUncheckedCreateInput = {
    id?: string
    company: string
    role: string
    period: string
    description: string
    categories?: TimelineItemCreatecategoriesInput | string[]
    technologies?: TimelineItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectEntryUncheckedCreateNestedManyWithoutTimelineItemInput
  }

  export type TimelineItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: TimelineItemUpdatecategoriesInput | string[]
    technologies?: TimelineItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectEntryUpdateManyWithoutTimelineItemNestedInput
  }

  export type TimelineItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: TimelineItemUpdatecategoriesInput | string[]
    technologies?: TimelineItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectEntryUncheckedUpdateManyWithoutTimelineItemNestedInput
  }

  export type TimelineItemCreateManyInput = {
    id?: string
    company: string
    role: string
    period: string
    description: string
    categories?: TimelineItemCreatecategoriesInput | string[]
    technologies?: TimelineItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimelineItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: TimelineItemUpdatecategoriesInput | string[]
    technologies?: TimelineItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: TimelineItemUpdatecategoriesInput | string[]
    technologies?: TimelineItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEntryCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timelineItem: TimelineItemCreateNestedOneWithoutProjectsInput
  }

  export type ProjectEntryUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    timelineItemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timelineItem?: TimelineItemUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timelineItemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEntryCreateManyInput = {
    id?: string
    name: string
    description: string
    timelineItemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timelineItemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    technologies?: SortOrder
    year?: SortOrder
    featured?: SortOrder
    demoUrl?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    year?: SortOrder
    featured?: SortOrder
    demoUrl?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    year?: SortOrder
    featured?: SortOrder
    demoUrl?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectEntryListRelationFilter = {
    every?: ProjectEntryWhereInput
    some?: ProjectEntryWhereInput
    none?: ProjectEntryWhereInput
  }

  export type ProjectEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimelineItemCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    period?: SortOrder
    description?: SortOrder
    categories?: SortOrder
    technologies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimelineItemMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    period?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimelineItemMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    role?: SortOrder
    period?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimelineItemScalarRelationFilter = {
    is?: TimelineItemWhereInput
    isNot?: TimelineItemWhereInput
  }

  export type ProjectEntryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    timelineItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    timelineItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectEntryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    timelineItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectCreatetechnologiesInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdatetechnologiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TimelineItemCreatecategoriesInput = {
    set: string[]
  }

  export type TimelineItemCreatetechnologiesInput = {
    set: string[]
  }

  export type ProjectEntryCreateNestedManyWithoutTimelineItemInput = {
    create?: XOR<ProjectEntryCreateWithoutTimelineItemInput, ProjectEntryUncheckedCreateWithoutTimelineItemInput> | ProjectEntryCreateWithoutTimelineItemInput[] | ProjectEntryUncheckedCreateWithoutTimelineItemInput[]
    connectOrCreate?: ProjectEntryCreateOrConnectWithoutTimelineItemInput | ProjectEntryCreateOrConnectWithoutTimelineItemInput[]
    createMany?: ProjectEntryCreateManyTimelineItemInputEnvelope
    connect?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
  }

  export type ProjectEntryUncheckedCreateNestedManyWithoutTimelineItemInput = {
    create?: XOR<ProjectEntryCreateWithoutTimelineItemInput, ProjectEntryUncheckedCreateWithoutTimelineItemInput> | ProjectEntryCreateWithoutTimelineItemInput[] | ProjectEntryUncheckedCreateWithoutTimelineItemInput[]
    connectOrCreate?: ProjectEntryCreateOrConnectWithoutTimelineItemInput | ProjectEntryCreateOrConnectWithoutTimelineItemInput[]
    createMany?: ProjectEntryCreateManyTimelineItemInputEnvelope
    connect?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
  }

  export type TimelineItemUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TimelineItemUpdatetechnologiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectEntryUpdateManyWithoutTimelineItemNestedInput = {
    create?: XOR<ProjectEntryCreateWithoutTimelineItemInput, ProjectEntryUncheckedCreateWithoutTimelineItemInput> | ProjectEntryCreateWithoutTimelineItemInput[] | ProjectEntryUncheckedCreateWithoutTimelineItemInput[]
    connectOrCreate?: ProjectEntryCreateOrConnectWithoutTimelineItemInput | ProjectEntryCreateOrConnectWithoutTimelineItemInput[]
    upsert?: ProjectEntryUpsertWithWhereUniqueWithoutTimelineItemInput | ProjectEntryUpsertWithWhereUniqueWithoutTimelineItemInput[]
    createMany?: ProjectEntryCreateManyTimelineItemInputEnvelope
    set?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
    disconnect?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
    delete?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
    connect?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
    update?: ProjectEntryUpdateWithWhereUniqueWithoutTimelineItemInput | ProjectEntryUpdateWithWhereUniqueWithoutTimelineItemInput[]
    updateMany?: ProjectEntryUpdateManyWithWhereWithoutTimelineItemInput | ProjectEntryUpdateManyWithWhereWithoutTimelineItemInput[]
    deleteMany?: ProjectEntryScalarWhereInput | ProjectEntryScalarWhereInput[]
  }

  export type ProjectEntryUncheckedUpdateManyWithoutTimelineItemNestedInput = {
    create?: XOR<ProjectEntryCreateWithoutTimelineItemInput, ProjectEntryUncheckedCreateWithoutTimelineItemInput> | ProjectEntryCreateWithoutTimelineItemInput[] | ProjectEntryUncheckedCreateWithoutTimelineItemInput[]
    connectOrCreate?: ProjectEntryCreateOrConnectWithoutTimelineItemInput | ProjectEntryCreateOrConnectWithoutTimelineItemInput[]
    upsert?: ProjectEntryUpsertWithWhereUniqueWithoutTimelineItemInput | ProjectEntryUpsertWithWhereUniqueWithoutTimelineItemInput[]
    createMany?: ProjectEntryCreateManyTimelineItemInputEnvelope
    set?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
    disconnect?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
    delete?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
    connect?: ProjectEntryWhereUniqueInput | ProjectEntryWhereUniqueInput[]
    update?: ProjectEntryUpdateWithWhereUniqueWithoutTimelineItemInput | ProjectEntryUpdateWithWhereUniqueWithoutTimelineItemInput[]
    updateMany?: ProjectEntryUpdateManyWithWhereWithoutTimelineItemInput | ProjectEntryUpdateManyWithWhereWithoutTimelineItemInput[]
    deleteMany?: ProjectEntryScalarWhereInput | ProjectEntryScalarWhereInput[]
  }

  export type TimelineItemCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TimelineItemCreateWithoutProjectsInput, TimelineItemUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TimelineItemCreateOrConnectWithoutProjectsInput
    connect?: TimelineItemWhereUniqueInput
  }

  export type TimelineItemUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TimelineItemCreateWithoutProjectsInput, TimelineItemUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TimelineItemCreateOrConnectWithoutProjectsInput
    upsert?: TimelineItemUpsertWithoutProjectsInput
    connect?: TimelineItemWhereUniqueInput
    update?: XOR<XOR<TimelineItemUpdateToOneWithWhereWithoutProjectsInput, TimelineItemUpdateWithoutProjectsInput>, TimelineItemUncheckedUpdateWithoutProjectsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectEntryCreateWithoutTimelineItemInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEntryUncheckedCreateWithoutTimelineItemInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEntryCreateOrConnectWithoutTimelineItemInput = {
    where: ProjectEntryWhereUniqueInput
    create: XOR<ProjectEntryCreateWithoutTimelineItemInput, ProjectEntryUncheckedCreateWithoutTimelineItemInput>
  }

  export type ProjectEntryCreateManyTimelineItemInputEnvelope = {
    data: ProjectEntryCreateManyTimelineItemInput | ProjectEntryCreateManyTimelineItemInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEntryUpsertWithWhereUniqueWithoutTimelineItemInput = {
    where: ProjectEntryWhereUniqueInput
    update: XOR<ProjectEntryUpdateWithoutTimelineItemInput, ProjectEntryUncheckedUpdateWithoutTimelineItemInput>
    create: XOR<ProjectEntryCreateWithoutTimelineItemInput, ProjectEntryUncheckedCreateWithoutTimelineItemInput>
  }

  export type ProjectEntryUpdateWithWhereUniqueWithoutTimelineItemInput = {
    where: ProjectEntryWhereUniqueInput
    data: XOR<ProjectEntryUpdateWithoutTimelineItemInput, ProjectEntryUncheckedUpdateWithoutTimelineItemInput>
  }

  export type ProjectEntryUpdateManyWithWhereWithoutTimelineItemInput = {
    where: ProjectEntryScalarWhereInput
    data: XOR<ProjectEntryUpdateManyMutationInput, ProjectEntryUncheckedUpdateManyWithoutTimelineItemInput>
  }

  export type ProjectEntryScalarWhereInput = {
    AND?: ProjectEntryScalarWhereInput | ProjectEntryScalarWhereInput[]
    OR?: ProjectEntryScalarWhereInput[]
    NOT?: ProjectEntryScalarWhereInput | ProjectEntryScalarWhereInput[]
    id?: StringFilter<"ProjectEntry"> | string
    name?: StringFilter<"ProjectEntry"> | string
    description?: StringFilter<"ProjectEntry"> | string
    timelineItemId?: StringFilter<"ProjectEntry"> | string
    createdAt?: DateTimeFilter<"ProjectEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectEntry"> | Date | string
  }

  export type TimelineItemCreateWithoutProjectsInput = {
    id?: string
    company: string
    role: string
    period: string
    description: string
    categories?: TimelineItemCreatecategoriesInput | string[]
    technologies?: TimelineItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimelineItemUncheckedCreateWithoutProjectsInput = {
    id?: string
    company: string
    role: string
    period: string
    description: string
    categories?: TimelineItemCreatecategoriesInput | string[]
    technologies?: TimelineItemCreatetechnologiesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimelineItemCreateOrConnectWithoutProjectsInput = {
    where: TimelineItemWhereUniqueInput
    create: XOR<TimelineItemCreateWithoutProjectsInput, TimelineItemUncheckedCreateWithoutProjectsInput>
  }

  export type TimelineItemUpsertWithoutProjectsInput = {
    update: XOR<TimelineItemUpdateWithoutProjectsInput, TimelineItemUncheckedUpdateWithoutProjectsInput>
    create: XOR<TimelineItemCreateWithoutProjectsInput, TimelineItemUncheckedCreateWithoutProjectsInput>
    where?: TimelineItemWhereInput
  }

  export type TimelineItemUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TimelineItemWhereInput
    data: XOR<TimelineItemUpdateWithoutProjectsInput, TimelineItemUncheckedUpdateWithoutProjectsInput>
  }

  export type TimelineItemUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: TimelineItemUpdatecategoriesInput | string[]
    technologies?: TimelineItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineItemUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: TimelineItemUpdatecategoriesInput | string[]
    technologies?: TimelineItemUpdatetechnologiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEntryCreateManyTimelineItemInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectEntryUpdateWithoutTimelineItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEntryUncheckedUpdateWithoutTimelineItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEntryUncheckedUpdateManyWithoutTimelineItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}