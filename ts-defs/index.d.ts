import { Node } from 'estree';

export enum Syntax {
    AssignmentExpression     = 'AssignmentExpression',
    AssignmentPattern        = 'AssignmentPattern',
    ArrayExpression          = 'ArrayExpression',
    ArrayPattern             = 'ArrayPattern',
    ArrowFunctionExpression  = 'ArrowFunctionExpression',
    AwaitExpression          = 'AwaitExpression',
    BlockStatement           = 'BlockStatement',
    BinaryExpression         = 'BinaryExpression',
    BreakStatement           = 'BreakStatement',
    CallExpression           = 'CallExpression',
    CatchClause              = 'CatchClause',
    ClassBody                = 'ClassBody',
    ClassDeclaration         = 'ClassDeclaration',
    ClassExpression          = 'ClassExpression',
    ComprehensionBlock       = 'ComprehensionBlock',
    ComprehensionExpression  = 'ComprehensionExpression',
    ConditionalExpression    = 'ConditionalExpression',
    ContinueStatement        = 'ContinueStatement',
    DirectiveStatement       = 'DirectiveStatement',
    DoWhileStatement         = 'DoWhileStatement',
    DebuggerStatement        = 'DebuggerStatement',
    EmptyStatement           = 'EmptyStatement',
    ExportAllDeclaration     = 'ExportAllDeclaration',
    ExportBatchSpecifier     = 'ExportBatchSpecifier',
    ExportDeclaration        = 'ExportDeclaration',
    ExportNamedDeclaration   = 'ExportNamedDeclaration',
    ExportSpecifier          = 'ExportSpecifier',
    ExpressionStatement      = 'ExpressionStatement',
    ForStatement             = 'ForStatement',
    ForInStatement           = 'ForInStatement',
    ForOfStatement           = 'ForOfStatement',
    FunctionDeclaration      = 'FunctionDeclaration',
    FunctionExpression       = 'FunctionExpression',
    GeneratorExpression      = 'GeneratorExpression',
    Identifier               = 'Identifier',
    IfStatement              = 'IfStatement',
    ImportExpression         = 'ImportExpression',
    ImportSpecifier          = 'ImportSpecifier',
    ImportDeclaration        = 'ImportDeclaration',
    Literal                  = 'Literal',
    LabeledStatement         = 'LabeledStatement',
    LogicalExpression        = 'LogicalExpression',
    MemberExpression         = 'MemberExpression',
    MetaProperty             = 'MetaProperty',
    MethodDefinition         = 'MethodDefinition',
    ModuleDeclaration        = 'ModuleDeclaration',
    NewExpression            = 'NewExpression',
    ObjectExpression         = 'ObjectExpression',
    ObjectPattern            = 'ObjectPattern',
    PrivateIdentifier        = 'PrivateIdentifier',
    Program                  = 'Program',
    Property                 = 'Property',
    PropertyDefinition       = 'PropertyDefinition',
    RestElement              = 'RestElement',
    ReturnStatement          = 'ReturnStatement',
    SequenceExpression       = 'SequenceExpression',
    SpreadElement            = 'SpreadElement',
    Super                    = 'Super',
    SwitchStatement          = 'SwitchStatement',
    SwitchCase               = 'SwitchCase',
    TaggedTemplateExpression = 'TaggedTemplateExpression',
    TemplateElement          = 'TemplateElement',
    TemplateLiteral          = 'TemplateLiteral',
    ThisExpression           = 'ThisExpression',
    ThrowStatement           = 'ThrowStatement',
    TryStatement             = 'TryStatement',
    UnaryExpression          = 'UnaryExpression',
    UpdateExpression         = 'UpdateExpression',
    VariableDeclaration      = 'VariableDeclaration',
    VariableDeclarator       = 'VariableDeclarator',
    WhileStatement           = 'WhileStatement',
    WithStatement            = 'WithStatement',
    YieldExpression          = 'YieldExpression'
}

export interface EsotopeOptions {
    indent?: string,
    base?: number,
    parse?: Function
    format?: {
        indent?: {
            style?: string,
            base?: number
        },
        newline?: string,
        space?: string,
        json?: boolean,
        renumber?: boolean,
        hexadecimal?: boolean,
        quotes?: 'single' | 'double' | 'auto',
        escapeless?: boolean,
        compact?: boolean,
        parentheses?: boolean,
        semicolons?: boolean,
        safeConcatenation?: boolean
    },
    directive?: boolean,
    raw?: boolean,
    verbatim?: string
}

export function generate (ast: Node, options?: EsotopeOptions): string;
