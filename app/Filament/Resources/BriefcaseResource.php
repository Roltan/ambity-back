<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BriefcaseResource\Pages;
use App\Filament\Resources\BriefcaseResource\RelationManagers;
use App\Models\Briefcase;
use App\Models\Tag;
use Filament\Forms;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

use function GuzzleHttp\default_ca_bundle;

class BriefcaseResource extends Resource
{

    protected static ?string $model = Briefcase::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label('название')
                    ->required(),
                TextInput::make('seo_title'),
                TextInput::make('og_title'),
                TextInput::make('og_type'),
                TextInput::make('url')
                    ->prefix('https://ambity/')
                    ->suffixIcon('heroicon-m-globe-alt')
                    ->required()
                    ->label('ссылка'),
                TextInput::make('og_url')
                    ->url()
                    ->suffixIcon('heroicon-m-globe-alt'),

                FileUpload::make('img')
                    ->required()
                    ->image()
                    ->label('картинка на превью'),
                FileUpload::make('video'),
                FileUpload::make('seo_image')
                    ->image(),
                FileUpload::make('og_image')
                    ->image(),

                Textarea::make('html')
                    ->required(),
                Textarea::make('description')
                    ->label('описание')
                    ->required(),
                Textarea::make('seo_description'),
                Textarea::make('og_description'),

                Select::make('tag_id')
                    ->multiple()
                    ->relationship('tag')
                    ->options(Tag::where('vis', true)->get()->pluck('name', 'id')),

                Checkbox::make('vis')
                    ->label('отображать?')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('имя'),
                ToggleColumn::make('vis')
                    ->label('отображать?'),
                
                TextColumn::make('seo_title'),
                TextColumn::make('og_title'),
                TextColumn::make('og_type'),
                TextColumn::make('url')
                    ->label('ссылка'),
                TextColumn::make('og_url'),

                ImageColumn::make('img')
                    ->label('кортинка на превью'),
                ImageColumn::make('video'),
                ImageColumn::make('seo_image'),
                ImageColumn::make('og_image'),

                TextColumn::make('html'),
                TextColumn::make('description')
                    ->label('описание'),
                TextColumn::make('seo_description'),
                TextColumn::make('og_description'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBriefcases::route('/'),
            'create' => Pages\CreateBriefcase::route('/create'),
            'edit' => Pages\EditBriefcase::route('/{record}/edit'),
        ];
    }
}
