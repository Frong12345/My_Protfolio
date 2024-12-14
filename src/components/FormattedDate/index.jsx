const FormattedDate = ({isHighLight , children}) => {
    return (
        <div>
            <div>
                <span className={`text-sm ${isHighLight ? "text-primaryAccent" : ""}`}>
                    {children}
                </span>
            </div>
        </div>
    )
}

export default FormattedDate;