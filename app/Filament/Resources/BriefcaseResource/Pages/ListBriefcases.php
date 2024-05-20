<?php

namespace App\Filament\Resources\BriefcaseResource\Pages;

use App\Filament\Resources\BriefcaseResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBriefcases extends ListRecords
{
    protected static string $resource = BriefcaseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
