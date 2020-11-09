To create initial EF migration:
dotnet ef migrations add initialCreate -s ..\Api\Api.csproj

To run the initial migration:
dotnet ef database update -s ..\Api\Api.csproj

To generate sql script to be run in prod env:
dotnet ef migrations script -s ..\Api\Api.csproj

