import * as React from 'react'
import classnames from 'classnames'

type ButtonSize = 'lg' | 'sm'
type ButtonType = 'default' | 'primary' | 'danger' | 'link'

interface IButtonProps {
    // 自定义按钮类名
    className?: string,
    // 按钮是否不可用
    disabled?: boolean,
    // 按钮链接
    href?: string,
    // 按钮类型
    btnType?: ButtonType,
    // 按钮大小
    size?: ButtonSize,
    children?: React.ReactNode
}

const Button: React.FC<IButtonProps> = props => {
    const {
        className,
        btnType,
        size,
        disabled,
        href,
        children,
        ...restProps
    } = props,
        classPrefix = 'mui-btn',
        isLinkBtn = btnType === 'link'
    // 设置类名
    const classes = classnames(classPrefix, className, {
        [`${classPrefix}-${btnType}`]: !!btnType,
        [`${classPrefix}-${size}`]: !!size,
        [`${classPrefix}-disabled`]: (isLinkBtn && disabled)
    })
    if(isLinkBtn && !!href) {
        return (
            <a
                {...restProps}
                className={classes}
                href={href}>
                {children}
            </a>
        )
    }
    return (
        <button
            {...restProps}
            className={classes}
            disabled={disabled}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

export default Button