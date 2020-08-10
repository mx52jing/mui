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

// ts为button元素本身提供的一些属性类型
type NativeBtnProps = IButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// ts为a链接元素提供的属性类型
type AnchorBtnProps = IButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 定义最终的ButtonProps(Partial将属性都变成可选的)
type ButtonProps = Partial<NativeBtnProps & AnchorBtnProps>

const Button: React.FC<ButtonProps> = props => {
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